class TopView {
  #data;
  #introEl = document.querySelector(".section--selected-game");

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
    console.log(this.#data);
    return `<div class="fade-in-characters">
           <div><img class="intro-circle laguna" src="${
             this.#data.lagunaImg
           }"/></div>
          <div><img class="intro-circle cloud" src="${
            this.#data.cloudImg
          }"/></div>
    <div><img class="intro-circle vivi" src="${this.#data.viviImg}"/></div>
          <div><img class="intro-circle rikku" src="${
            this.#data.rikkuImg
          }"/></div>
         <div><img class="intro-circle lightning" src="${
           this.#data.lightningImg
         }"/></div>
         </div>
          <h1 class="headline">Search for games, characters, and more</h1>
       <div class="divider">Game Select</div>
       `;
  }
}

export default new TopView();
