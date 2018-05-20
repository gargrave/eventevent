// @flow
export type Event = {
  id?: string,
  created?: Date | string,
  updated?: Date | string,
  title: string,
  date: Date | string,
};

export type EventErrors = {
  title: string,
};
