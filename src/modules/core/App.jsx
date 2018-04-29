import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

import styles from './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.app}>
          <main>
            <Routes />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
