export default class View {
  _data = null;

  /**
   * Render the markup on the page
   * @param {string} data the user email
   */
  render(data) {
    this._data = data;

    const markup = this._generateMarkup();
    this.#clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Clear parent element of any HTML
   */
  #clear() {
    this._parentEl.innerHTML = '';
  }
}
