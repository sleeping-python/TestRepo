import * as React from 'react';
import {Provider} from 'react-redux';

import Divider from '@material-ui/core/Divider'

import './App.css';
import Header from './components/header'
import Hello from './containers/Hello';
import store from './store';

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <Provider store = {store}>
        <div>
          <Header/>
          <Hello/>
          <Divider/>
        </div>
      </Provider>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.tsx</code> and save to reload.
      //   </p>
      //   <br/>
      //   <Hello name="TypeScript" enthusiasmLevel={10} />
      //   <br/>
      //   <Spinner testString = "Terror"/>
      // </div>
    );
  }
}

export default App;
