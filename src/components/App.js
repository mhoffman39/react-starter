import React from 'react';
import MovieList from './MovieList.js'
import Search from './Search.js'
import AddMovies from './AddMovies.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}
      ],
      filteredMovies: []
    }

    this.returnSearch = this.returnSearch.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }
  // componentDidMount() {
  //   this.setState({movies: movieDatabase}, ()=> console.log(this.state))
  // }
  returnSearch(returnedMovie) {
    for (var i = 0; i < this.state.movies.length; i ++) {
      if (this.state.movies[i].title === returnedMovie) {
        var temp = this.state.filteredMovies;
        var tempObj = {title: returnedMovie}
        temp.push(tempObj);
        this.setState({filteredMovies: temp})
      }
    }
  }
  addMovie(newMovie) {
    var copyMovies = this.state.movies.slice();
    copyMovies.push(newMovie);
    this.setState({movies: copyMovies})
  }

  render() {
    var returnedMovie = this.state.filteredMovies;
    var movieDisplay;
      if (returnedMovie.length > 0) {
        movieDisplay = <MovieList movies={this.state.filteredMovies} />
      } else {
        console.log('default')
        movieDisplay = <MovieList movies={this.state.movies}/>
      }
    return (
      <div className="app">
        <h1>Movie List</h1>
        <AddMovies addMovie={this.addMovie} />
        <Search onFormSubmit={this.returnSearch} />
        {movieDisplay}
      </div>
    )
  }
}

export default App;


