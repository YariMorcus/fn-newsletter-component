export default class View {
  _data = null;
  #parentElem = document.querySelector('.newsletter');

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();

    this.#clear();

    // Render markup
    this.#parentElem.classList.add('newsletter--success');
    this.#parentElem.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Clear inner HTML markup of parent elem.
   * @returns {undefined}
   */
  #clear() {
    this.#parentElem.innerHTML = '';
  }
}
