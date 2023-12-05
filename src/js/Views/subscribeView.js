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
   * Generate success message HTML markup
   * @returns {string} HTML markup
   */
  _generateMarkup() {
    const markup = `
      <div class="newsletter__illustration newsletter__illustration--success"></div>
      <article class="newsletter__article">
        <h1 class="newsletter__h1">Thanks for subscribing!</h1>
        <p class="newsletter__p">A confirmation email has been sent to <span class="newsletter__user-email">${this._data.email}</span>.
          Please open it and click the button inside to confirm your subscription.</p>
        <button class="button">Dismiss message</button>
      </article> <!-- .newsletter__article -->`;

    return markup;
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
