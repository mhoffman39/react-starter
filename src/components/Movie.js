import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      watched: false,
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.watched === false) {
      this.setState({watched: true})
    } else {
      this.setState({watched: false})
    }
  }

  render() {
    var watched;
    if (this.state.watched) {
      watched = <button type="button" className="watched" onClick={ () => {this.handleSubmit(event)} }>Watched</button>
    } else { watched = <button type="button" className="not-watched" onClick={ () => {this.handleSubmit(event)} }>Not Watched</button>

    }
    return (
      <div className="movie">
        {this.props.movie.title}
        {watched}
      </div>
    )
  }
}

  export default Movie;
