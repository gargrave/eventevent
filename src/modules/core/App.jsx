import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <main>
            <Routes />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
