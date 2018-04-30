// @flow
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

import type { LoginErrors, LoginUser } from './flowtypes';
import { validationErrors } from '../../globals/errors';

function loginHasAllFields(login: LoginUser) {
  return !!login.email && !!login.password;
}

function validateLogin(data: LoginUser): LoginErrors {
  const errors = {
    found: false,
    email: '',
    password: '',
  };
  const email = data.email;
  const password = data.password;

  if (!email) {
    errors.found = true;
    errors.email = validationErrors.required;
  } else if (!isEmail(email)) {
    errors.found = true;
    errors.email = validationErrors.email;
  }

  if (!password) {
    errors.found = true;
    errors.password = validationErrors.required;
  } else if (!isLength(password, { min: 8 })) {
    errors.found = true;
    errors.password = validationErrors.length(8);
  }

  return errors;
}

export {
  loginHasAllFields,
  validateLogin,
};
