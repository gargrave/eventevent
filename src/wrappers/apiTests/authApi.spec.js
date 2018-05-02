// @flow
import { submitLogin } from '../auth';
import { firestore } from '../firebase';
import { parseCollection } from '../firebase/firestoreHelpers';

describe('Auth API', () => {
  it('should fail to read without authentication', async() => {
    expect.assertions(1);
    try {
      await firestore.collection('events').get();
    } catch (err) {
      expect(err.message).toMatch('Missing or insufficient permissions');
    }
  });
});
