import React from 'react';

const Error = ({ error }) => {
  return (
    <div className='ui negative message'>
      <div className='header'>
        We're sorry but an error has occured within the application. Please try
        again later.
      </div>
      <p>{error}</p>
    </div>
  );
};

export default Error;
