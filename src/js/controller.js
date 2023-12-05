import subscribeView from './Views/subscribeView';
import successView from './Views/successView';
import * as model from './model';

const subscribeController = function () {
  try {
    // Check if email field is empty.
    if (subscribeView.isEmpty()) throw new Error();

    // Retrieve email
    const USER_EMAIL = subscribeView.getEmail();

    // Check if user email is valid
    if (!model.validEmail(USER_EMAIL)) throw new Error();

    // Save user email
    model.saveEmail(USER_EMAIL);

    // Render success message
    subscribeView.render(model.user);

    // Add click event listener to dismiss button
    successView.addHandlerDismiss(dismissController);
  } catch (err) {
    // TODO add error handling
    console.error(err);
  }
};

/**
 * This controller is used to apply inline validation to the form email field
 * @returns {undefined}
 */
const formEmailController = function () {
  // Render error if email field is empty or not a valid email
  if (subscribeView.isEmpty() || !model.validEmail(subscribeView.getEmail())) {
    subscribeView.renderError();
    return;
  }

  // Valid? Hide error
  subscribeView.hideError();
};

const dismissController = function () {
  console.log(`dismissController in controller.js`);
};

const init = function () {
  subscribeView.addHandlerSubmit(subscribeController);
  subscribeView.addHandlerInputChange(formEmailController);
};

init();
