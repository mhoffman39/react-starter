import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state.value)
  }

  render() {
    return (
      <form >
        <label>
          <input type="text" placeholder="Search..." value={this.state.value} onChange={this.handleChange} />
        </label>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

  export default Search;