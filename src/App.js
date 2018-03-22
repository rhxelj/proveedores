import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
