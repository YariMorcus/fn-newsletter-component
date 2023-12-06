import View from './view';

class subscribeView extends View {
  #parentEl = document.querySelector('.newsletter');
  #formEl = document.querySelector('.form');

  addHandlerSubmit(handler) {
    this.#formEl.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }

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
      <div class="newsletter__illustration"></div>
      <article class="newsletter__article">

        <h1 class="newsletter__h1">Stay updated!</h1>
        <p class="newsletter__p">Join 60,000+ product managers receiving monthly updates on:</p>
        <ul class="newsletter__ul">
          <li class="newsletter__li">Product discovery and building what matters</li>
          <li class="newsletter__li">Measuring to ensure updates are a success</li>
          <li class="newsletter__li">And much more!</li>
        </ul> <!-- .newsletter__ul -->

        <form class="form" method="POST">
          <div class="form__row">
            <div class="form__row--label-error">
              <label for="email" class="form__label">Email address <span aria-label="required">*</span></label>
              <span id="js-form__error-email" class="form__error" aria-live="polite"></span>
            </div>
            <input type="email" name="user_email" id="email" class="form__email" placeholder="email@company.com" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
            required>
          </div> <!-- .form__row -->
          <div class="form__row">
            <button class="button">Subscribe to monthly newsletter</button>
          </div> <!-- .form-row -->
        </form> <!-- .form -->

      </article> <!-- .newsletter__article -->`;

    return markup;
  }

  /**
   * Checks whether a form control is empty
   * @returns {boolean} true if empty, otherwise false
   */
  isEmpty() {
    const EMAIL_FIELD = this.#formEl.querySelector('.form__email');
    return EMAIL_FIELD.value.trim().length === 0 ? true : false;
  }

  /**
   * Retrieve user email
   * @returns {string} User email
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
}

export default new subscribeView();
