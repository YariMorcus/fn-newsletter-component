import View from './view';

class successView extends View {
  #parentEl = document.querySelector('.newsletter');

  addHandlerDismiss(handler) {
    // Initialize parent elem. first
    // this.#assignParentEl();

    // Listen for click event on dismiss button
    this.#parentEl.addEventListener('click', e => {
      if (e.target.classList.contains('button')) {
        handler();
      }
    });
  }

  toggleSuccessClass() {
    console.log(this.#parentEl);
    this.#parentEl.classList.toggle('newsletter--success');
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

  #assignParentEl() {
    // If placed outside of method, #parentEl will be undefined because elem.
    // does not exists yet
    this.#parentEl = document.querySelector('.newsletter');
  }
}

export default new successView();
