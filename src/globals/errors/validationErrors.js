// @flow
const validationErrors = {
  required: 'This field is required.',
  email: 'Must be a valid email address.',
  passwords: 'Passwords do not match',

  requiredWithName: (field: string) => `"${field}" is a required field.`,
  emailWithName: (field: string) => `"${field}" must be a valid email address.`,
  length: (min: number | string) => `Must be at least ${min} characters long.`,
  maxLength: (max: number | string) => `Must be no more than ${max} characters long.`,
  lengthWithName: (field: string, min: number | string) => `"${field}" must be at least ${min} characters long.`,
};

export {
  validationErrors,
};
