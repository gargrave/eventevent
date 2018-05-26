// @flow
import type { Event, EventErrors } from './flowtypes';

function defaultDate() {
  const date = new Date();
  date.setHours(12);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

export const eventModel = {
  empty(): Event {
    return {
      title: '',
      date: defaultDate(),
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
