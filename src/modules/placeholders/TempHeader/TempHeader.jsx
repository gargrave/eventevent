// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import { localUrls } from '../../../globals/urls';

type Props = {
};

const TempHeader = ({}: Props) => (
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to={localUrls.events.myHosted}>My Hosted Events</Link></li>
    <li><Link to={localUrls.events.myRegistered}>My Registered Events</Link></li>
    <li><Link to={localUrls.events.create}>Schedule an Event</Link></li>
  </ul>
);

TempHeader.propTypes = {
};

export default TempHeader;
