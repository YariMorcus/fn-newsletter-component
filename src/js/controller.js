import subscribeView from './Views/subscribeView';

const subscribeController = function () {
  console.log('subscribeController test!');
};
const init = function () {
  subscribeView.addHandlerSubmit(subscribeController);
};

init();
