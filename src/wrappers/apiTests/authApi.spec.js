import { submitLogin, submitLogout } from '../auth';
import { db } from '../firebase';
import { mockUsers } from '../firebase/mocks';

const user1 = { ...(mockUsers[0]) };

describe('Auth API', () => {
  it('should be able to read when authenticated', async() => {
    expect.assertions(1);
    const res = await submitLogin(user1.email, user1.password);
    expect(res.user.uid).toBeDefined();
  });
});

// describe('No Authentication', () => {
//   beforeAll(async() => {
//     await submitLogout();
//   });

//   describe('Events API', () => {
//     it('should fail to read without authentication', async() => {
//       expect.assertions(1);
//       try {
//         await db.collection('events').get();
//       } catch (err) {
//         expect(err.message).toMatch('Missing or insufficient permissions');
//       }
//     });
//   });
// });
