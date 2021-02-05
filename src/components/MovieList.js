import React from 'react';
import Movie from './Movie.js'

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div classlist="movieList">
        {this.props.movies.map((movie, key) => (
        <Movie movie={movie} key={key}/> ))}
      </div>
    )
  }
}

export default MovieList;