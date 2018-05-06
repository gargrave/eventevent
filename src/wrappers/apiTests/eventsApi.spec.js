import { submitLogout } from '../auth';
import { db } from '../firebase';
import { parseCollection } from '../firebase/firestoreHelpers';
import { makeEvent, mockEvents, mockUsers, objectsByOwner } from '../firebase/mocks';
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
      expect(user && user.uid).toBe(undefined);
      try {
        await db.collection('events').get();
      } catch (err) {
        expect(err.message).toMatch(SECURITY_ERROR);
      }
    });

    it('should fail to write without authentication', async() => {
      expect.assertions(1);
      try {
        const testEvent = makeEvent({ uid: 0 });
        await db.collection('events').add(testEvent);
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
      expect(user && user.uid).not.toBe(undefined);
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
        expect(events.length).toBe(userMockEvents.length);
      });
    });

    describe('Write actions', () => {
      it('should be able to write with valid data', async() => {
        expect.assertions(2);
        const testEvent = makeEvent(user);
        const docRef = await db.collection('events').add(testEvent);
        const doc = await docRef.get();
        const eventId = doc.id;
        expect(eventId).toBeDefined();
        expect(doc.data()).toEqual(testEvent);
        await docRef.delete();
      });

      describe('"owner" field', () => {
        it('should not be able to write with "owner" field missing', async() => {
          expect.assertions(1);
          const testEvent = makeEvent(user);
          delete testEvent.owner;
          try {
            await db.collection('events').add(testEvent);
          } catch (err) {
            expect(err.message).toMatch(SECURITY_ERROR);
          }
        });

        it('should not be able to write with empty "owner" field', async() => {
          expect.assertions(1);
          const testEvent = makeEvent(user);
          testEvent.owner = '';
          try {
            await db.collection('events').add(testEvent);
          } catch (err) {
            expect(err.message).toMatch(SECURITY_ERROR);
          }
        });

        it('should not be able to write with non-string "owner" field', async() => {
          expect.assertions(1);
          const testEvent = makeEvent(user);
          testEvent.owner = 12345;
          try {
            await db.collection('events').add(testEvent);
          } catch (err) {
            expect(err.message).toMatch(SECURITY_ERROR);
          }
        });

        it('should not be able to write with invalid "owner" field', async() => {
          expect.assertions(1);
          const testEvent = makeEvent(user);
          testEvent.owner = 'notAValidUserId';
          try {
            await db.collection('events').add(testEvent);
          } catch (err) {
            expect(err.message).toMatch(SECURITY_ERROR);
          }
        });
      });

      describe('"title" field', () => {
        it('should not be able to write with "title" field missing', async() => {
          expect.assertions(1);
          const testEvent = makeEvent(user);
          delete testEvent.title;
          try {
            await db.collection('events').add(testEvent);
          } catch (err) {
            expect(err.message).toMatch(SECURITY_ERROR);
          }
        });

        it('should not be able to write with empty "title" field', async() => {
          expect.assertions(1);
          const testEvent = makeEvent(user);
          testEvent.title = '';
          try {
            await db.collection('events').add(testEvent);
          } catch (err) {
            expect(err.message).toMatch(SECURITY_ERROR);
          }
        });

        it('should not be able to write with non-string "title" field', async() => {
          expect.assertions(1);
          const testEvent = makeEvent(user);
          testEvent.title = 12345;
          try {
            await db.collection('events').add(testEvent);
          } catch (err) {
            expect(err.message).toMatch(SECURITY_ERROR);
          }
        });
      });

      describe('field count', () => {
        it('should not be able to write if extra fields are provided', async() => {
          expect.assertions(1);
          const testEvent = makeEvent(user);
          testEvent.whatever = 'whatever';
          try {
            await db.collection('events').add(testEvent);
          } catch (err) {
            expect(err.message).toMatch(SECURITY_ERROR);
          }
        });
      });
    });

    describe('Delete actions', () => {
      it('should not be able to delete other user\'s events', async() => {
        // context: create an event as user 1
        // logout, then log in as user 2, and try to delete it
        expect.assertions(1);
        const testEvent = makeEvent(user);
        const docRef = await db.collection('events').add(testEvent);

        await submitLogout();
        user = await loginAsUser(user2);

        try {
          await docRef.delete();
        } catch (err) {
          expect(err.message).toMatch(SECURITY_ERROR);
          // now clean it up properly!
          await submitLogout();
          user = await loginAsUser(user1);
          await docRef.delete();
        }
      });
    });
  });
});
