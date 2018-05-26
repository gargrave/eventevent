// @flow
const validationErrors = {
  email: 'Must be a valid email address.',
  passwords: 'Passwords do not match',
  required: 'This field is required.',

  emailWithName: (field: string) => `"${field}" must be a valid email address.`,
  format: (name: string) => `Must be a valid ${name}`,
  length: (min: number | string) => `Must be at least ${min} characters long.`,
  lengthWithName: (field: string, min: number | string) => `"${field}" must be at least ${min} characters long.`,
  maxLength: (max: number | string) => `Must be no more than ${max} characters long.`,
  requiredWithName: (field: string) => `"${field}" is a required field.`,
};

export {
  validationErrors,
};
