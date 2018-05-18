// @flow
import type { ApiError } from './flowtypes';

export const parseAPIError = (err: ApiError): string => {
  if (err.message) {
    return `Error: ${err.message}`;
  }
  return 'Error: An unkonwn error occurred! :(';
};
