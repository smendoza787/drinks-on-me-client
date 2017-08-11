import React, { Component } from 'react';
import BarService from '../services/BarService';
import { Route } from 'react-router-dom';

class BarsShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bar: {}
    }
  }

  componentDidMount() {
    BarService.fetchBar(this.props.match.params.barId).then(bar => this.setState({ bar: bar }))
  }

  render() {
    return (
      <div>
        <h1>Bar: {this.state.bar.name}</h1>
        <h3>Address: {this.state.bar.address}</h3>
        <h3>City: {this.state.bar.city}</h3>
        <h3>State: {this.state.bar.state}</h3>
        <h3>Rating: {this.state.bar.rating}</h3>
      </div>
    )
  }
}

export default BarsShow;
