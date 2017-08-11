import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AddBar from './components/AddBar';
import BarsList from './components/BarsList';
import BarsPage from './containers/BarsPage';
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
    BarService.fetchBars().then(bars => this.setState({ bars }))
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
          <BarsList bars={this.state.bars}  />
        </div>
        <div className="main-content">
          <AddBar addBar={this.addBar} />
          <Route path='/bars' component={BarsPage} />
        </div>
      </div>
    );
  }
}

export default App;
