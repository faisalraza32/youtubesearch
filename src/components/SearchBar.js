import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onTermChange(term) {
    this.setState({ term });
    this.props.onChange(term);
  }

  render() {
    return (
      <div className="form-group">
        <input
          className="form-control"
          placeholder="Search Term"
          value={this.state.term}
          onChange={event => this.onTermChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
