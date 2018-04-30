// @flow
import React, { Component } from 'react';
import { func, shape } from 'prop-types';

import Routes from '../../Routes';
import styles from './AppComponent.css';

type Props = {
  actions: Object,
};

class AppComponent extends Component<Props> {
  static propTypes = {
    actions: shape({
      setInitialized: func.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    this.props.actions.setInitialized();
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
