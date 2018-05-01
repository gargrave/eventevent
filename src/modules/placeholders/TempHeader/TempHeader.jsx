// @flow
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
};

const TempHeader = ({}: Props) => (
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/events/'>My Events</Link></li>
    <li><Link to='/events/schedule'>Schedule an Event</Link></li>
  </ul>
);

TempHeader.propTypes = {
};

export default TempHeader;
