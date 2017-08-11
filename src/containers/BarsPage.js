import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import BarsList from '../components/BarsList';
import BarsShow from './BarsShow';

const BarsPage = ({ match, bars }) =>
  <div>
    <Switch>
      <Route path={`${match.url}/:barId`} component={BarsShow} />
      <Route exact path={match.url} render={() => (
        <h3>Please select a Bar from the list.</h3>
      )} />
    </Switch>
  </div>

  export default BarsPage;
