class subscribedView {
  #parentEl = document.querySelector('.subscribed');

  renderEmail(userEmail) {
    this.#parentEl.querySelector('#js-user-email').textContent =
      userEmail ?? '<user-email>';
  }
}

export default new subscribedView();
