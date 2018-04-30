// @flow
import React from 'react';

import styles from './HomePage.css';

const HomePage = () => (
  <div>
    <h2>HomePage</h2>
    <p className={styles.infoText}>This is info text!</p>
    <p className={styles.dangerText}>This is danger text!</p>
  </div>
);

export default HomePage;
