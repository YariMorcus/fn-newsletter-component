import subscribeView from './Views/subscribeView';
import subscribedView from './Views/subscribedView';
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

    subscribeView.submitForm();
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
  subscribeView.hideError(model.user.email);
};

/**
 * This controller is used to render the user email from the
 * state object on the subscribed page after form submission
 */
const subscribedController = function () {
  subscribedView.renderEmail(model.user.email);
};

// Retrieve current page
const currentPath = window.location.pathname;
const currentPage = currentPath.slice(
  currentPath.indexOf('/') + 1,
  currentPath.lastIndexOf('.html')
);

const init = function (page) {
  if (page === 'subscribed') {
    subscribedController();
  } else {
    subscribeView.addHandlerSubmit(subscribeController);
    subscribeView.addHandlerInputChange(formEmailController);
  }
};

init(currentPage);
