import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarService from '../services/BarService';

const BarsShow = ({ bar }) => {
  return (
    <div>
      <h1>{bar.name}</h1>
      <h3>{bar.address}</h3>
      <h3>{bar.city}, {bar.state}</h3>
      <h3>Rating: {bar.rating}</h3>
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
