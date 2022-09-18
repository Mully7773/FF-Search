class SelectView {
  #data;
  #quickViewEl = document.querySelector(".quick-view-grid");
  #errorMessage =
    "We could not find that data...please try refreshing your browser.";

  // Possibly export to a parent 'View'
  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((e) => window.addEventListener(e, handler));
    // Smooth Scrolling functionality
    this.#quickViewEl.addEventListener("click", function (e) {
      if (e.target === null) return;
      else {
        const id = e.target.parentNode.getAttribute("data-scroll-id");
        console.log(id);
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }

  #clearQuickView() {
    this.#quickViewEl.innerHTML = "";
  }

  renderSpinner() {
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
    this.#clearQuickView();
    this.#quickViewEl.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this.#errorMessage) {
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
    this.#clearQuickView();
    this.#quickViewEl.insertAdjacentHTML("afterbegin", markup);
  }

  //   Render landing page game select
  renderGameSelect(data) {
    this.#data = data;
    const gameSelectMarkup = this.#generateGameSelectMarkup();
    this.#clearQuickView();
    this.#quickViewEl.insertAdjacentHTML("afterbegin", gameSelectMarkup);
  }

  #generateGameSelectMarkup() {
    // console.log(this.#data);
    // Note possibility: title attribute instead of data attribute
    return `
        <a class="number-select ffI-circle" data-scroll-id=#${
          this.#data.ffId1
        }><div class="game-circle">I</div></a>
        <a class="number-select ffII-circle" data-scroll-id=#${
          this.#data.ffId2
        }><div class="game-circle">II</div></a>
        <a class="number-select ffIII-circle" data-scroll-id=#${
          this.#data.ffId3
        }><div class="game-circle">III</div></a>
        <a class="number-select ffIV-circle" data-scroll-id=#${
          this.#data.ffId4
        }><div class="game-circle">IV</div></a>
        <a class="number-select ffV-circle" data-scroll-id=#${
          this.#data.ffId5
        }><div class="game-circle">V</div></a>
        <a class="number-select ffVI-circle" data-scroll-id=#${
          this.#data.ffId6
        }><div class="game-circle">VI</div></a>
        <a class="number-select ffVII-circle" data-scroll-id=#${
          this.#data.ffId7
        }><div class="game-circle">VII</div></a>
        <a class="number-select ffVIII-circle" data-scroll-id=#${
          this.#data.ffId8
        }><div class="game-circle">VIII</div></a>
        <a class="number-select ffIX-circle" data-scroll-id=#${
          this.#data.ffId9
        }><div class="game-circle">IX</div></a>
        <a class="number-select ffX-circle" data-scroll-id=#${
          this.#data.ffId10
        }><div class="game-circle">X</div></a>
        <a class="number-select ffXII-circle" data-scroll-id=#${
          this.#data.ffId12
        }><div class="game-circle">XII</div></a>
        <a class="number-select ffXIII-circle" data-scroll-id=#${
          this.#data.ffId13
        }><div class="game-circle">XIII</div></a>
        <a class="number-select ffXV-circle" data-scroll-id=#${
          this.#data.ffId15
        }><div class="game-circle">XV</div></a>
        `;
  }

  //   Render character select
  renderOriginCharacterSelect(data) {
    this.#data = data;
    const markup = this.#generateOriginMarkup();
    this.#clearQuickView();
    this.#quickViewEl.insertAdjacentHTML("afterbegin", markup);
  }

  #generateOriginMarkup() {
    return this.#data.map(this.#characterCircles).join("");
  }

  #characterCircles(character) {
    console.log(character);
    const mogPlaceholder = `../../img/M3on3-moogle-from-fandom (2).webp`;
    let characterImgs =
      character.pictures[0] === undefined
        ? mogPlaceholder
        : character.pictures[0].url;
    return `
    <div class="character-circle-container">
      <a class="character-link" data-scroll-id="#${character.id}">
        <img class="character-circle" src="${characterImgs}"/>
      </a>
    </div>
    `;
  }
}
export default new SelectView();
