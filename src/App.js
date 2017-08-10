import React, { Component } from 'react';
import Bars from './components/Bars';
import AddBar from './components/AddBar';
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
      <div className="App">
        <div className="navbar">
          {/*<Navbar />*/}
        </div>
        <div className="sidebar">
          <Bars bars={this.state.bars} />
        </div>
        <div className="main-content">
          <AddBar addBar={this.addBar} />
        </div>
      </div>
    );
  }
}

export default App;
