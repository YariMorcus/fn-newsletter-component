/**
 * Class representing the subscribeView (visible form)
 * @property {Object} formEl - the form element itself
 */
class subscribeView {
  #formEl = document.querySelector('.form');

  /**
   * Listen for submit event on form element
   * @param {Object} handler - the controller function
   */
  addHandlerSubmit(handler) {
    this.#formEl.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }

  /**
   * Listen for input event on e-mail input field
   * @param {Object} handler - the controller function
   */
  addHandlerInputChange(handler) {
    this.#formEl.addEventListener('input', e => {
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
   * @returns {Boolean} true if empty, otherwise false
   */
  isEmpty() {
    const EMAIL_FIELD = this.#formEl.querySelector('.form__email');
    return EMAIL_FIELD.value.trim().length === 0 ? true : false;
  }

  /**
   * Retrieve user email
   * @returns {String} User email
   */
  getEmail() {
    return this.#formEl.querySelector('.form__email').value.trim();
  }

  /**
   * Render error CSS and text label
   * @returns {undefined}
   */
  renderError() {
    // Render error CSS
    this.#formEl
      .querySelector(`.form__email`)
      .classList.add(`form__email--error`);

    // Render error text label
    this.#formEl.querySelector('#js-form__error-email').innerText =
      'Valid email required';
  }

  /**
   * Hide error CSS and text label
   * @returns {undefined}
   */
  hideError() {
    // Hide error CSS
    this.#formEl
      .querySelector(`.form__email`)
      .classList.remove(`form__email--error`);

    // Hide error text label
    this.#formEl.querySelector('#js-form__error-email').innerText = '';
  }

  /**
   * Submit form programmatically
   */
  submitForm() {
    this.#formEl.submit();
  }
}

export default new subscribeView();
