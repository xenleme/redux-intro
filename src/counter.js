import React from 'react';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2 id="counter">{counter}</h2>
      <button 
        onClick={dec}
        className="btn btn-primary btn-large">DEC</button>
      <button 
        onClick={inc}
        className="btn btn-primary btn-large">INC</button>
      <button 
        onClick={rnd}
        className="btn btn-primary btn-large">RND</button>
    </div>
  );
};

export default Counter;