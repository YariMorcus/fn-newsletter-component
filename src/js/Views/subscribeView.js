import View from './view';

class subscribeView extends View {
  #parentEl = document.querySelector('.form');

  addHandlerSubmit(handler) {
    this.#parentEl.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new subscribeView();
