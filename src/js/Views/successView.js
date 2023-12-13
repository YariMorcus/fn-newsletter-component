import View from './view';

class successView extends View {
  #parentEl = null;

  addHandlerDismiss(handler) {
    // Initialize parent elem. first
    this.#assignParentEl();

    // Listen for click event on dismiss button
    this.#parentEl.addEventListener('click', e => {
      if (e.target.classList.contains('button')) {
        handler();
      }
    });
  }

  #assignParentEl() {
    // If placed outside of method, #parentEl will be undefined because elem.
    // does not exists yet
    this.#parentEl = document.querySelector('.newsletter--success');
  }
}

export default new successView();
