import React from 'react';
import movies from './movieDatabase.js'
import MovieList from './MovieList.js'
import Search from './Search.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {movie: ''}

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(returnedMovie) {
    for (var i = 0; i < movies.length; i ++) {
      if (movies[i].title === returnedMovie) {
        this.setState.movie = returnedMovie;
      }
    }
  }

  render() {
    var returnedMovie = this.state.returnedMovie;
    var temp;
      if (returnedMovie !== '') {
        temp = <MovieList movie={this.state.returnedMovie} />
      } else {
      temp = <MovieList movies={movies}/>
      }
    return (
      <div className="app">
        <Search onFormSubmit={this.submitForm} />
        {temp}
      </div>
    )
  }
}

export default App;


