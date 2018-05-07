// @flow
import type { FbCollection } from '../../firebase/flowtypes';
import type { Event } from '../../../modules/events/flowtypes';

import { eventModel } from '../../../modules/events/models';
import { db } from '../../firebase';
import { parseCollection } from '../../firebase/firestoreHelpers';
import { getCurrentUserId } from '../../auth';

const fetchHostedEventsFromAPI = async(): Promise<?Event[]> => {
  const userId = getCurrentUserId();
  if (!userId) {
    return [];
  }

  const query = db
    .collection('events')
    .where('owner', '==', userId);
  const results: FbCollection = await query.get();
  return parseCollection(results, eventModel.fromAPI);
};

export default fetchHostedEventsFromAPI;
