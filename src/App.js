import React, { Component } from 'react';
import Bars from './components/Bars';
import BarService from './services/BarService';
import './App.css';

let bars = [
  { name: "BJ's Bar & Grill" , id: 1 },
  { name: "Gold Spike", id: 2 }
]

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

  render() {
    return (
      <div className="App">
        <div className="navbar">
          {/*<Navbar />*/}
        </div>
        <div className="sidebar">
          <Bars bars={bars} />
        </div>
        <div className="main-content">
          {/*<Bar />*/}
        </div>
      </div>
    );
  }
}

export default App;
