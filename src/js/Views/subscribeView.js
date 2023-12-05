import View from './view';

class subscribeView extends View {
  #parentEl = document.querySelector('.form');

  addHandlerSubmit(handler) {
    this.#parentEl.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }

  addHandlerInputChange(handler) {
    this.#parentEl.addEventListener('input', e => {
      if (!e.target.classList.contains('form__email')) return;
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

  /**
   * Render error CSS and text label
   * @returns {undefined}
   */
  renderError() {
    // Render error CSS
    this.#parentEl
      .querySelector(`.form__email`)
      .classList.add(`form__email--error`);

    // Render error text label
    this.#parentEl.querySelector('#js-form__error-email').innerText =
      'Valid email required';
  }

  /**
   * Hide error CSS and text label
   * @returns {undefined}
   */
  hideError() {
    // Hide error CSS
    this.#parentEl
      .querySelector(`.form__email`)
      .classList.remove(`form__email--error`);

    // Hide error text label
    this.#parentEl.querySelector('#js-form__error-email').innerText = '';
  }
}

export default new subscribeView();
