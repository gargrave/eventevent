import faker from 'faker';

import { fbTimestamp } from '../';
import { mockUsers } from './users';

export const makeEvent = (owner) => ({
  owner: owner.uid,
  title: `${faker.lorem.sentence()}`,
  created: fbTimestamp(),
  updated: fbTimestamp(),
});

export const mockEvents = [
  makeEvent(mockUsers[0]),
  makeEvent(mockUsers[0]),
  makeEvent(mockUsers[0]),
  makeEvent(mockUsers[1]),
  makeEvent(mockUsers[1]),
  makeEvent(mockUsers[1]),
];
