import subscribeView from './Views/subscribeView';
import * as model from './model';

const subscribeController = function () {
  try {
    // Check if email field is empty.
    if (subscribeView.isEmpty())
      throw new Error('You must fill in an email address');

    // Check if user email is valid
    if (!model.validEmail(subscribeView.getEmail())) return;

    // 3. Valid? render success message
    // 1. Render email of user
    // 4. Not valid? render error message
  } catch (err) {
    // TODO add error handling
    console.error(err);
  }
};
const init = function () {
  subscribeView.addHandlerSubmit(subscribeController);
};

init();
