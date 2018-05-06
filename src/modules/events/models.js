// @flow
import type { Event, EventErrors } from './flowtypes';

export const eventModel = {
  empty(): Event {
    return {
      title: '',
    };
  },

  emptyErrors(): EventErrors {
    return {
      title: '',
    };
  },

  editable(event: Event): Event {
    return {
      created: event.created,
      title: event.title,
      id: event.id,
    };
  },

  toAPI(data: Event): Event {
    let payload: any = {
      title: data.title.trim() || '',
    };

    ['id', 'created'].forEach((val) => {
      if (data[val]) {
        payload[val] = data[val];
      }
    });

    return payload;
  },

  fromAPI(event: Event): Event {
    const {
      title,
      created,
      updated,
    } = event;

    return {
      id: event.id,
      title,
      created,
      updated,
    };
  },
};
