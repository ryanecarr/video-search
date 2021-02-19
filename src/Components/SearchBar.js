import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };
  render() {
    return (
      <form className='ui search' onSubmit={this.onFormSubmit}>
        <div className='field'>
          <div
            className={`ui fluid big icon input ${
              this.props.loading ? 'loading' : ''
            }`}
          >
            <input
              value={this.state.term}
              className='prompt'
              type='text'
              autoComplete='off'
              placeholder='Search...'
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <i className='search icon'></i>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
