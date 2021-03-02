import React, { useState } from 'react';

const SearchBar = ({ loading, onSearchSubmit }) => {
  const [term, setTerm] = useState('');
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
  };
  return (
    <form className='ui search' onSubmit={onFormSubmit}>
      <div className='field'>
        <div className={`ui fluid big icon input ${loading ? 'loading' : ''}`}>
          <input
            value={term}
            className='prompt'
            type='text'
            autoComplete='off'
            placeholder='Search...'
            onChange={(e) => setTerm(e.target.value)}
          />
          <i className='search icon'></i>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
