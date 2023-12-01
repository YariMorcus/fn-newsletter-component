import View from './view';

class subscribeView extends View {
  #parentEl = document.querySelector('.form');

  addHandlerSubmit(handler) {
    this.#parentEl.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }

  /**
   * Checks whether a form control is empty
   * @returns {boolean} true if empty, otherwise false
   */
  isEmpty() {
    const EMAIL_FIELD = this.#parentEl.querySelector('.form__email');
    return EMAIL_FIELD.value.trim().length === 0 ? true : false;
  }

  /**
   * Retrieve user email
   * @returns {string} User email
   */
  getEmail() {
    return this.#parentEl.querySelector('.form__email').value.trim();
  }
}

export default new subscribeView();
