import React from 'react';

const LoadingSpinner = (props) => {

  return (
    <div className={props.customClassName}>
      {'...loading'}
    </div>
  );
}

export default LoadingSpinner;