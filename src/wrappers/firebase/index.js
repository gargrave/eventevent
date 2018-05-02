import firebase from 'firebase';
import 'firebase/firestore';

import firebaseConfig from './firebaseConfig.js';

let initialized = false;
let firebaseAuth;
let firestore;

if (!initialized) {
  firebase.initializeApp(firebaseConfig);
  firebaseAuth = firebase.auth();
  firestore = firebase.firestore();
  const settings = { timestampsInSnapshots: true };
  firestore.settings(settings);
  initialized = true;
}

export const fbTimestamp = () =>
  firebase.firestore.FieldValue.serverTimestamp();

export {
  firestore,
  firebaseAuth,
};
