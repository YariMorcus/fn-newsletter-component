import { EMAIL_REGEX } from './config';

// State object
export const user = {
  email: null,
};

/**
 * Test email based on regex
 * @param {String} email user e-mail
 * @returns {Boolean} true if match, OTHERWISE false
 */
export const validEmail = function (email) {
  return EMAIL_REGEX.test(email) ? true : false;
};

/**
 * Save user email in state object
 * @param {String} email user e-mail
 * @returns {undefined}
 */
export const saveEmail = function (email) {
  user.email = email;
};
