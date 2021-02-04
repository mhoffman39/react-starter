import React from 'react';
import movies from './movieDatabase.js'
import MovieList from './MovieList.js'
import Search from './Search.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {movies: [],
                filteredMovies: []}

    this.submitForm = this.submitForm.bind(this);
  }
  componentDidMount() {
    this.setState({movies: movies}, ()=> console.log(this.state))
  }
  submitForm(returnedMovie) {
    console.log(this.state, returnedMovie)
    for (var i = 0; i < this.state.movies.length; i ++) {
      if (this.state.movies[i].title === returnedMovie) {
        var temp = this.state.filteredMovies;
        var tempObj = {title: returnedMovie}
        temp.push(tempObj);
        this.setState({filteredMovies: temp})
      }
    }
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
        <Search onFormSubmit={this.submitForm} />
        {movieDisplay}
      </div>
    )
  }
}

export default App;


