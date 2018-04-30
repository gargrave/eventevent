import firebase from 'firebase';
import 'firebase/firestore';

import firebaseConfig from '../secrets/firebaseConfig.js';

let initialized = false;
let firebaseAuth;
let db;

if (!initialized) {
  firebase.initializeApp(firebaseConfig);
  firebaseAuth = firebase.auth();
  db = firebase.firestore();
  initialized = true;
}

export const fbTimestamp = () =>
  firebase.firestore.FieldValue.serverTimestamp();

export {
  db,
  firebaseAuth,
};
