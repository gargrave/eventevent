// @flow
import React, { Component } from 'react';
import { func } from 'prop-types';

import Routes from '../../Routes';
import styles from './AppComponent.css';

type Props = {
  setInitialized: Function,
};

class AppComponent extends Component<Props> {
  static propTypes = {
    setInitialized: func.isRequired,
  }

  componentDidMount() {
    this.props.setInitialized();
  }

  render() {
    return (
      <div className={styles.app}>
        <main>
          <Routes />
        </main>
      </div>
    );
  }
}

export default AppComponent;
