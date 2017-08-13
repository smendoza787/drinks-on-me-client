import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarService from '../services/BarService';

const BarsShow = ({ bar }) => {
  return (
    <div>
    <img src={bar.icon} />
      <h1>{bar.name}</h1>
      <h3>{bar.formatted_address}</h3>
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
