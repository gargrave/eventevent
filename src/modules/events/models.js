// @flow
import type { Event, EventErrors } from './flowtypes';

export const eventModel = {
  empty(): Event {
    return {
      title: '',
      date: new Date(),
    };
  },

  emptyErrors(): EventErrors {
    return {
      date: '',
      title: '',
    };
  },

  editable(event: Event): Event {
    return {
      created: event.created_at,
      date: event.date,
      title: event.title,
      id: event.id,
      updated: event.updated_at,
    };
  },

  toAPI(data: Event): Event {
    let payload: any = {
      date: data.date,
      title: data.title.trim() || '',
    };

    ['id', 'created_at'].forEach((val) => {
      if (data[val]) {
        payload[val] = data[val];
      }
    });

    return payload;
  },

  fromAPI(event: Event): Event {
    const {
      id,
      created_at,
      date,
      title,
      updated_at,
    } = event;

    return {
      id,
      created_at,
      date,
      title,
      updated_at,
    };
  },
};
