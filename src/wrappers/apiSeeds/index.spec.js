import { submitLogin, submitLogout } from '../auth';
import { db } from '../firebase';
import { mockEvents, mockUsers, objectsByOwner } from '../firebase/mocks';

const user1 = { ...(mockUsers[0]) };
const user2 = { ...(mockUsers[1]) };

const loginAsUser = async(user) => {
  const res = await submitLogin(user.email, user.password);
  return res.user;
};

const deleteEventsForUser = async(user) => {
  const query = db
    .collection('events')
    .where('owner', '==', user.uid);
  const results = await query.get();
  const batch = db.batch();
  results.docs.forEach((doc) => batch.delete(doc.ref));
  return await batch.commit();
};

const writeEventsForUser = async(user) => {
  const eventsForUser = objectsByOwner(mockEvents, user);
  const collection = db.collection('events');
  const batch = db.batch();
  eventsForUser.forEach((event) => batch.set(collection.doc(), event));
  return await batch.commit();
};

describe('Seeding data to the Firestore database', async() => {
  console.log(`
    =============================================
    = Not a Test! Just seeding the Firebase DB! =
    =============================================`
  );
  let user;

  describe('*** Seeding data for User 1 ***', () => {
    it('should login successfully as user 1', async() => {
      expect.assertions(1);
      user = await loginAsUser(user1);
      expect(user.uid).toBeDefined();
    });
  
    it('should clear out existing test data', async() => {
      await deleteEventsForUser(user);
    });
  
    it('should write a couple of events to the database', async() => {
      await writeEventsForUser(user);
    });
  });

  describe('*** Seeding data for User 2 ***', () => {
    it('should login successfully as user 2', async() => {
      await submitLogout();
      user = null;
      expect.assertions(1);
      user = await loginAsUser(user2);
      expect(user.uid).toBeDefined();
    });
  
    it('should clear out existing test data', async() => {
      await deleteEventsForUser(user);
    });
  
    it('should write a couple of events to the database', async() => {
      await writeEventsForUser(user);
    });
  });
  // TODO: delete all of the mock data after we are done
});
