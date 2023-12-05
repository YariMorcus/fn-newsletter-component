import subscribeView from './Views/subscribeView';
import * as model from './model';

const subscribeController = function () {
  try {
    // Check if email field is empty.
    if (subscribeView.isEmpty()) throw new Error();

    // Check if user email is valid
    if (!model.validEmail(subscribeView.getEmail())) throw new Error();

    // 3. Valid? render success message
    // 1. Render email of user
    // 4. Not valid? render error message
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

const init = function () {
  subscribeView.addHandlerSubmit(subscribeController);
  subscribeView.addHandlerInputChange(formEmailController);
};

init();
