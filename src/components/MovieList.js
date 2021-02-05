import React from 'react';
import Movie from './Movie.js'

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="movieList">
        {this.props.movies.map((movie, key) => (
        <Movie movie={movie} key={key}/> ))}
      </div>
    )
  }
}

export default MovieList;