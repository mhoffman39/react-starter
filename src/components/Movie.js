import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props)
  }
  // this.state = {

  // }


  render() {
    return (
      <div className="movie">
        {this.props.movie.title}
        <button type="button">Watched</button>
      </div>
    )
  }
}

  export default Movie;
