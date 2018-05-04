import { submitLogout } from '../auth';
import { db } from '../firebase';
import { parseCollection } from '../firebase/firestoreHelpers';
import { mockEvents, mockUsers, objectsByOwner } from '../firebase/mocks';
import { loginAsUser } from './helpers';

const user1 = { ...(mockUsers[0]) };
const user2 = { ...(mockUsers[1]) };

const SECURITY_ERROR = 'Missing or insufficient permissions';

describe('Events API', () => {
  let user;

  describe('No Authentication', () => {
    beforeAll(async() => {
      await submitLogout();
    });

    it('should fail to read without authentication', async() => {
      expect.assertions(2);
      expect(user && user.uid).toEqual(undefined);
      try {
        await db.collection('events').get();
      } catch (err) {
        expect(err.message).toMatch(SECURITY_ERROR);
      }
    });
  });

  describe('Authenticated', () => {
    let userMockEvents = objectsByOwner(mockEvents, user1);

    it('should successfully login', async() => {
      expect.assertions(1);
      user = await loginAsUser(user1);
      expect(user && user.uid).not.toEqual(undefined);
    });

    describe('Read Actions', () => {
      it('should fail to read another user\'s Events', async() => {
        expect.assertions(1);
        try {
          const query = db
            .collection('events')
            .where('owner', '==', user2.uid);
          await query.get();
        } catch (err) {
          expect(err.message).toMatch(SECURITY_ERROR);
        }
      });
  
      it('should be able to read user\'s Events', async() => {
        expect.assertions(1);
        const query = db
          .collection('events')
          .where('owner', '==', user.uid);
        const res = await query.get();
        const events = parseCollection(res);
        expect(events.length).toEqual(userMockEvents.length);
      });
    });

    describe('Write actions', () => {
      it('should not be able to write if not authenticated');
      it('should be able to write with valid data');

      describe('"owner" field', () => {
        it('should not be able to write with "owner" field missing');
        it('should not be able to write with empty "owner" field');
        it('should not be able to write with non-string "owner" field');
        it('should not be able to write with invalid "owner" field');
      });

      describe('"title" field', () => {
        it('should not be able to write with "title" field missing');
        it('should not be able to write with empty "title" field');
        it('should not be able to write with non-string "title" field');
      });

      describe('field count', () => {
        it('should not be able to write if extra fields are provided');
      });
    });

    describe('Delete actions', () => {
      it('should not be able to delete other user\'s records');
      it('should be able to delete own records');
    });
  });
});
