import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarService from '../services/BarService';

const BarsShow = ({ bar }) => {
  return (
    <div>
      <h1>Bar: {bar.name}</h1>
      <h3>Address: {bar.address}</h3>
      <h3>City: {bar.city}</h3>
      <h3>State: {bar.state}</h3>
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
