import faker from 'faker';
import { mockUsers } from './users';

const makeEvent = (owner) => ({
  owner: owner.uid,
  title: `${faker.lorem.sentence()}`,
});

export const mockEvents = [
  makeEvent(mockUsers[0]),
  makeEvent(mockUsers[0]),
  makeEvent(mockUsers[0]),
  makeEvent(mockUsers[1]),
  makeEvent(mockUsers[1]),
  makeEvent(mockUsers[1]),
];
