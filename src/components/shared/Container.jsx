import React from 'react';

const Container = ({ styleCss = '', children }) => {
  // Max width, horizontal padding, and center content
  const defaultCss = "w-full max-w-screen-xl px-4 py-4 sm:px-6 md:px-8 mx-auto";

  return (
    <div className={`${defaultCss} ${styleCss}`}>
      {children}
    </div>
  );
};

export default Container;
