// @flow
export type Event = {
  id?: string,
  created_at?: Date | string,
  updated_at?: Date | string,
  title: string,
  date: Date | string,
};

export type EventErrors = {
  found?: boolean,
  date: string,
  title: string,
};
