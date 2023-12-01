import { EMAIL_REGEX } from './config';

/**
 * Test email based on regex
 * @returns {boolean} true if match, OTHERWISE false
 */
export const validEmail = function (email) {
  return EMAIL_REGEX.test(email) ? true : false;
};
