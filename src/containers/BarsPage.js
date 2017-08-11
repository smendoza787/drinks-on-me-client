import React from 'react';
import { Route } from 'react-router-dom';
import BarsList from '../components/BarsList';
import BarsShow from './BarsShow';

const BarsPage = ({ match, bars }) =>
  <div>
    <Route path={`${match.url}/:barId`} component={BarsShow} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a Bar from the list.</h3>
    )} />
  </div>

  export default BarsPage;
