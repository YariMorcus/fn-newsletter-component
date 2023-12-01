import subscribeView from './Views/subscribeView';

const subscribeController = function () {
  try {
    // 1. Check if email field is empty.
    if (subscribeView.isEmpty())
      throw new Error('You must fill in an email address');

    // 2. Not empty? Check if user email is valid (regex)
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
