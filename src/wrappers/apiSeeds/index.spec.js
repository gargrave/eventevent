import { submitLogin, submitLogout } from '../auth';
import { db } from '../firebase';
import { mockEvents, mockUsers, objectsByOwner } from '../firebase/mocks';

const user1 = { ...(mockUsers[0]) };
const user2 = { ...(mockUsers[1]) };


const loginAsUser = async(user) => {
  const res = await submitLogin(user.email, user.password);
  return res.user;
};


const writeCollectionForUser = async(mockData, tableName, user) => {
  const userItems = objectsByOwner(mockData, user);
  const collection = db.collection(tableName);
  const batch = db.batch();
  userItems.forEach(
    (d) => batch.set(collection.doc(), d)
  );
  return await batch.commit();
};

const deleteCollectionForUser = async(tableName, user) => {
  const query = db
    .collection(tableName)
    .where('owner', '==', user.uid);
  const results = await query.get();
  const batch = db.batch();
  results.docs.forEach(
    (doc) => batch.delete(doc.ref)
  );
  return await batch.commit();
};


const writeEventsForUser = (user) => 
  writeCollectionForUser(mockEvents, 'events', user);

const deleteEventsForUser = (user) =>
  deleteCollectionForUser('events', user);


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
  
    it('should clear and re-write test data', async() => {
      await deleteEventsForUser(user);
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
  
    it('should clear and re-write test data', async() => {
      await deleteEventsForUser(user);
      await writeEventsForUser(user);
    });
  });
});
