class TopView {
  #data;
  #logoData;
  #introEl = document.querySelector(".section--selected-game");

  // Possibly export to a parent 'View'
  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((e) => window.addEventListener(e, handler));
  }

  #clearIntroEl() {
    this.#introEl.innerHTML = "";
  }

  renderWelcomeCharacters(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clearIntroEl();
    this.#introEl.insertAdjacentHTML("afterbegin", markup);
  }

  #generateMarkup() {
    // console.log(this.#data);
    return `
    <div class="fade-in-characters">
      <div>
        <img class="intro-circle laguna" src="${this.#data.lagunaImg}"/>
      </div>
      <div>
        <img class="intro-circle cloud" src="${this.#data.cloudImg}"/>
      </div>
      <div>
        <img class="intro-circle vivi" src="${this.#data.viviImg}"/>
      </div>
      <div>
        <img class="intro-circle rikku" src="${this.#data.rikkuImg}"/>
      </div>
         <div>
          <img class="intro-circle lightning" src="${this.#data.lightningImg}"/>
      </div>
    </div>
    <div>
      <h1 class="headline">Search for games, characters, and more</h1>
    </div>
    <div class="divider">
      <p>Game Select</p>
    </div>
       `;
  }

  renderLogo(data) {
    this.#logoData = data;
    if (!this.#logoData) return;
    const markup = `
    <div>
      <img class="selected-game-logo" src="${
        this.#logoData[0].picture
      }" alt="Picture of ${this.#logoData[0].title} logo"/>
    </div>
    <div class="divider">
      <p>Character Select</p>
    </div>
    `;
    this.#clearIntroEl();
    this.#introEl.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new TopView();
