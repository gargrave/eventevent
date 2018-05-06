// @flow
import type { FbCollection, FbDoc } from './flowtypes';

export const parseCollection = (
  coll: FbCollection,
  parseFn?: Function,
): Object[] => {
  if (!coll.docs) {
    return [];
  }

  return coll.docs.map((doc: FbDoc) => {
    let data: any = { id: doc.id, ...doc.data() };
    if (parseFn) {
      data = parseFn(data);
    }
    return data;
  });
};