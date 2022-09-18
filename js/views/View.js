export default class View {
  _clear() {
    this._parentElement.innerHTML = "";
  }

  _renderSpinner() {
    const markup = `
  <div class="spinner">
    <img
      class="spinner-icon"
      src="./img/Mini_Choco_Ylw-from-fandom.webp"
    />
    <div class="loading">
      <p class="loading-text">
        Loading<span class="dot first-dot">.</span
        ><span class="dot second-dot">.</span
        ><span class="dot third-dot">.</span>
      </p>
    </div>
  </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <img class="error-icon"
        src="./img/Mini_Choco_Ylw-from-fandom.webp"
      />
      <div class="errorMsg-container">
        <p class="error-text">
          ${message}
        </p>
      </div>
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
