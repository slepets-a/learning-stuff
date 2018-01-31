import React, { Component } from 'react';
import Reboot from 'material-ui/Reboot';
import logo from './logo.svg';
import './styles.css';

import Reselect from '../Reselect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Reboot />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Reselect />
      </div>
    );
  }
}

export default App;
