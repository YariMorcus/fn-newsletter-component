import subscribeView from './Views/subscribeView';
import successView from './Views/successView';
import * as model from './model';

/**
 * Controller that provides functionality for the form
 */
const subscribeController = function () {
  // Check if email field is empty
  if (subscribeView.isEmpty()) throw new Error();

  // Retrieve email
  const USER_EMAIL = subscribeView.getEmail();

  // Check if user email is valid
  if (!model.validEmail(USER_EMAIL)) throw new Error();

  // Save user email
  model.saveEmail(USER_EMAIL);

  // Render success message
  successView.render(model.user.email);
  successView.addSubscribedClass();
};

/**
 * Controller that provides inline validation
 * @returns {undefined}
 */
const formEmailController = function () {
  // Render error if email field is empty or not a valid email
  if (subscribeView.isEmpty() || !model.validEmail(subscribeView.getEmail())) {
    subscribeView.renderError();
    return;
  }

  // Valid? Hide error
  subscribeView.hideError(model.user.email);
};

const init = function () {
  subscribeView.addHandlerSubmit(subscribeController);
  subscribeView.addHandlerInputChange(formEmailController);
};

init();
