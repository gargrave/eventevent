// @flow
import type { FbCollection, FbDoc } from './flowtypes';

const convertTimestamp = (timestamp: any) => {
  if (timestamp.toDate && typeof timestamp.toDate === 'function') {
    return timestamp.toDate();
  }
  return timestamp;
};

export const parseCollection = (
  coll: FbCollection,
  parseFn?: Function,
): Object[] => {
  if (!coll.docs) {
    return [];
  }

  return coll.docs.map((doc: FbDoc) => {
    let data: any = { id: doc.id, ...doc.data() };
    if (data.created) {
      data.created = convertTimestamp(data.created);
    }
    if (data.updated) {
      data.updated = convertTimestamp(data.updated);
    }

    if (parseFn) {
      data = parseFn(data);
    }
    return data;
  });
};
