import React from 'react';

class AddMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }

    this.handleChange = this.handleChange.bind(this); //not needed with anonymous function in return statement
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    var newMovie = {
      title: this.state.title
    }
    this.props.addMovie(newMovie);
    this.setState({title: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          <input type="text" placeholder="Add movie title here" name="title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <button onClick={ () => {this.handleSubmit(event)} }>Add</button>
      </form>
    );
  }
}

  export default AddMovies;