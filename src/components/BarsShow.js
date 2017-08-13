import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarService from '../services/BarService';

const BarsShow = ({ bar }) => {
  return (
    <div>
      <h1>{bar.name}</h1>
      <h3>{bar.vicinity}</h3>
      <img src={bar.icon} />
      <p>Rating: {bar.rating}</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const bar = state.bars.find(bar => bar.id == ownProps.match.params.barId);

  if (bar) {
    return { bar };
  } else {
    return { bar: {} };
  }
}

export default connect(mapStateToProps)(BarsShow);
