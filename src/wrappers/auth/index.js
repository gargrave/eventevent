// @flow
import { firebaseAuth } from '../../globals/firebase';

export const submitLogin = async(email: string, password: string) =>
  firebaseAuth.signInAndRetrieveDataWithEmailAndPassword(email, password);

export const submitLogout = async() => 
  firebaseAuth.signOut();

export const submitRegister = async(email: string, password: string) =>
  firebaseAuth.createUserWithEmailAndPassword(email, password);

export const getCurrentUserId = () => 
  firebaseAuth.currentUser && firebaseAuth.currentUser.uid;

export const sendAccountVerificationEmail = () =>
  firebaseAuth.currentUser.sendEmailVerification();

export const sendPasswordResetEmail = (email: string) =>
  firebaseAuth.sendPasswordResetEmail(email);
