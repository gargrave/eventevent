// @flow
import type { FbError } from '../firebase/flowtypes';

export const parseAPIError = (err: FbError): string => {
  // TODO: make better use of Firebase's error structure
  // https://firebase.google.com/docs/reference/js/firebase.auth.Auth?authuser=0#signInWithEmailAndPassword
  // e.g. if auth/wrong-password, show an error on password field
  if (err.message) {
    return `Error: ${err.message}`;
  }
  return 'Error: An unkonwn error occurred! :(';
};
