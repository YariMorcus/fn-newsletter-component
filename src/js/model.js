import { EMAIL_REGEX } from './config';

// State object
export const user = {
  email: null,
};

/**
 * Test email based on regex
 * @returns {boolean} true if match, OTHERWISE false
 */
export const validEmail = function (email) {
  return EMAIL_REGEX.test(email) ? true : false;
};

export const saveEmail = function (email) {
  user.email = email;
};
