// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';

import { localUrls } from '../../../globals/urls';

const loggedInRoutes = () => (
  <React.Fragment>
    <li><Link to={localUrls.events.index}>Browse Events</Link></li>
    <li><Link to={localUrls.events.myHosted}>My Hosted Events</Link></li>
    <li><Link to={localUrls.events.myRegistered}>My Registered Events</Link></li>
    <li><Link to={localUrls.events.create}>Schedule an Event</Link></li>
    <li><Link to={localUrls.auth.account}>My Account</Link></li>
  </React.Fragment>
);

const defaultRoutes = () => (
  <React.Fragment>
    <li><Link to={localUrls.events.index}>Browse Events</Link></li>
    <li><Link to={localUrls.auth.login}>Login Page</Link></li>
  </React.Fragment>
);

type Props = {
  loggedIn: boolean,
};

const TempHeader = ({
  loggedIn,
}: Props) => (
  <ul>
    {loggedIn ? loggedInRoutes() : defaultRoutes()}
  </ul>
);

TempHeader.propTypes = {
  loggedIn: bool,
};

export default TempHeader;
