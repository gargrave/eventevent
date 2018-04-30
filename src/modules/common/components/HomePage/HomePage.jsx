// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

const HomePage = () => (
  <div>
    <h2>HomePage</h2>
    <List>
      <List.Item>
        <Link to='/account/login'>Go to Login Page</Link>
      </List.Item>
    </List>
  </div>
);

export default HomePage;
