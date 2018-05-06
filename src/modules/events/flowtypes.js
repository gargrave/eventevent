// @flow
export type Event = {
  id?: string,
  created?: Date | string,
  updated?: Date | string,
  title: string,
};

export type EventErrors = {
  title: string,
};
