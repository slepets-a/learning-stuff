import React, {Component} from 'react';
import Reboot from 'material-ui/Reboot';
import reactLogo from './react.svg';
import reduxLogo from './redux.svg';
import './styles.css';

import Reselect from '../Reselect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Reboot/>
        <header className="App-header">
          <img src={reactLogo} className="App-logo" alt="logo"/>
          <img src={reduxLogo} className="App-logo" alt="logo"/>
        </header>
        <Reselect/>
      </div>
    );
  }
}

export default App;
