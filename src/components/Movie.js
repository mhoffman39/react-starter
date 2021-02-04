import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="movie">
        {this.props.movie.title}
      </div>
    )
  }
}

  export default Movie;
