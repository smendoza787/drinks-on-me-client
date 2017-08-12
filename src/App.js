import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Main from './components/Main';
// import AddBar from './components/AddBar';
import BarsList from './components/BarsList';
import BarsPage from './containers/BarsPage';
import { fetchBars } from './actions/barActions';
import { setLocation } from './actions/locationActions';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.setLocation()
  }

  setLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.setLocation(position.coords)
    })
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
        <Main>
          {/*<AddBar />*/}
          <Route exact path="/" component={Home} />
          <Route path='/bars' component={BarsPage} />
        </Main>
        <p>{this.props.position.latitude}</p>
        <p>{this.props.position.longitude}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bars: state.bars,
    position: state.position
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBars: fetchBars,
    setLocation: setLocation
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
