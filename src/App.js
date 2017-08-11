import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import AddBar from './components/AddBar';
import BarsList from './components/BarsList';
import BarsPage from './containers/BarsPage';
import { fetchBars } from './actions/barActions';
import BarService from './services/BarService';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      bars: []
    }
  }

  componentDidMount() {
    this.props.fetchBars();
  }

  addBar = bar => {
    BarService.createBar(bar).then(bar => this.setState({
      bars: this.state.bars.concat(bar)
    }))
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="sidebar">
          <BarsList bars={this.props.bars}  />
        </div>
        <div className="main-content">
          <AddBar addBar={this.addBar} />
          <Route path='/bars' component={BarsPage} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { bars: state.bars }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBars: fetchBars
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
