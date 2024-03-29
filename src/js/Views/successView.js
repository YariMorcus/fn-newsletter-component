import View from './View';

/**
 * Class representing the successView (when subscribed)
 * @property {Object} parentEl - the parent element
 * @property {String} classNameSubscribed - class name for successView (styling purposes)
 */
class successView extends View {
  _parentEl = document.querySelector('.newsletter');
  #classNameSubscribed = 'subscribed';

  /**
   * Add subscribe class to .newsletter for styling purposes
   */
  addSubscribedClass() {
    this._parentEl.classList.add(this.#classNameSubscribed);
  }

  /**
   * Generate markup
   * @returns {string} markup the markup
   */
  _generateMarkup() {
    const markup = `
      <div class="newsletter__illustration newsletter__illustration--success"></div>
      <article class="newsletter__article">
        <h1 class="newsletter__h1">Thanks for subscribing!</h1>
        <p class="newsletter__p">A confirmation email has been sent to <span id="js-user-email" class="newsletter__user-email">${this._data}</span>.
          Please open it and click the button inside to confirm your subscription.</p>
        <a class="button" type="button" href="/">Dismiss message</a>
      </article>
    `;

    return markup;
  }
}

export default new successView();
