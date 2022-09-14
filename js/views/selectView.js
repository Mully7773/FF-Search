class SelectView {
  #data;
  moogle;
  #quickViewEl = document.querySelector(".quick-view-grid");

  //   Render landing page game select
  renderGameSelect(data) {
    this.#data = data;
    const gameSelectMarkup = this.#generateGameSelectMarkup();
    this.#clearQuickView();
    this.#quickViewEl.insertAdjacentHTML("afterbegin", gameSelectMarkup);
  }

  #clearQuickView() {
    this.#quickViewEl.innerHTML = "";
  }

  #generateGameSelectMarkup() {
    console.log(this.#data);
    return `
        <a class="number-select ffI-circle" href=${
          this.#data.ffId1
        }><div class="game-circle">I</div></a>
        <a class="number-select ffII-circle" href=${
          this.#data.ffId2
        }><div class="game-circle">II</div></a>
        <a class="number-select ffIII-circle" href=${
          this.#data.ffId3
        }><div class="game-circle">III</div></a>
        <a class="number-select ffIV-circle" href=${
          this.#data.ffId4
        }><div class="game-circle">IV</div></a>
        <a class="number-select ffV-circle" href=${
          this.#data.ffId5
        }><div class="game-circle">V</div></a>
        <a class="number-select ffVI-circle" href=${
          this.#data.ffId6
        }><div class="game-circle">VI</div></a>
        <a class="number-select ffVII-circle" href=${
          this.#data.ffId7
        }><div class="game-circle">VII</div></a>
        <a class="number-select ffVIII-circle" href=${
          this.#data.ffId8
        }><div class="game-circle">VIII</div></a>
        <a class="number-select ffIX-circle" href=${
          this.#data.ffId9
        }><div class="game-circle">IX</div></a>
        <a class="number-select ffX-circle" href=${
          this.#data.ffId10
        }><div class="game-circle">X</div></a>
        <a class="number-select ffXII-circle" href=${
          this.#data.ffId12
        }><div class="game-circle">XII</div></a>
        <a class="number-select ffXIII-circle" href=${
          this.#data.ffId13
        }><div class="game-circle">XIII</div></a>
        <a class="number-select ffXV-circle" href=${
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
     <a class="character-link" href="${character.id}"><img class="character-circle" src="${characterImgs}"/></a>
    </div>
    `;
  }
}

export default new SelectView();
