import React from 'react';

const Container = ({ styleCss = '' , children}) => {
  // Default style as an object
  const defaultCss = '';

  return (
    <div className={`${defaultCss} ${styleCss}`}>
      {children}
    </div>
  );
};

export default Container;
