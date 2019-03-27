import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

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

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

const mapDispatchToProps = (dispatch) => {
  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
  return {
    inc,
    dec,
    rnd: () => {
      const randValue = Math.floor(Math.random()*10);
      rnd(randValue);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);