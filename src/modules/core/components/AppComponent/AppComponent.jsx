// @flow
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { func, shape } from 'prop-types';
import { Container } from 'semantic-ui-react';

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
      <BrowserRouter>
        <Container>
          <div className={styles.app}>
            <main>
              <Routes />
            </main>
          </div>
        </Container>
      </BrowserRouter>
    );
  }
}

export default AppComponent;
