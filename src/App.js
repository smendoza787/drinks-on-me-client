import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AddBar from './components/AddBar';
import BarsList from './components/BarsList';
import BarsPage from './containers/BarsPage';
import { fetchBars } from './actions/barActions';
import BarService from './services/BarService';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchBars();
  }

  // addBar = bar => {
  //   BarService.createBar(bar).then(bar => this.setState({
  //     bars: this.state.bars.concat(bar)
  //   }))
  // }

  render() {
    return (
      <div>
        <NavBar />
        <BarsList bars={this.props.bars}  />
        <div className="main-content">
          <AddBar />
          <Route exact path="/" component={Home} />
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
