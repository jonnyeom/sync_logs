import React from 'react';

const Loading = () => {
  return (
    // This only works with Bootstrap 4.
    <div className="d-flex justify-content-center">
      <div className="spinner-grow text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
};

export default Loading;