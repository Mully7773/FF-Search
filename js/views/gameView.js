class GameView {
  #data;
  #quickViewEl = document.querySelector(".quick-view-grid");
  #mainContentEl = document.querySelector(".main-content-grid");
  #navListEl = document.querySelector(".main-nav-list");
  #selectedGameEl = document.querySelector(".section--selected-game");

  // renderHandler(handler) {
  //   this.#navListEl.addEventListener("click", handler);
  // }

  // Start

  // renderGameLogo(data) {
  //   console.log(data);
  //   // this.#data = data;
  //   console.log(data);
  //   const logo = data.ffGames[0].picture;
  //   console.log(logo);
  //   const gameLogoMarkup = this.#generateGameLogoMarkup();
  //   this.clearSelectedGame();
  //   this.#selectedGameEl.insertAdjacentHTML("afterbegin", gameLogoMarkup);
  // }

  // #generateGameLogoMarkup() {
  //   return ` <div>
  //          <img class="selected-game-logo" src="${
  //            this.#data.ffGames[0].picture
  //          }" alt="Picture of Final Fantasy logo"/>
  //         </div>
  //        <div class="divider">Character Select</div>`;
  // }

  // clearSelectedGame() {
  //   this.#selectedGameEl.innerHTML = "";
  // }

  // End

  renderGameSelect(data) {
    this.#data = data;
    const gameSelectMarkup = this.#generateGameSelectMarkup();
    this.#clearQuickView();
    this.#quickViewEl.insertAdjacentHTML("afterbegin", gameSelectMarkup);
  }

  renderGameData(data) {
    this.#data = data;
    const gameDataMarkup = this.#generateGameDataMarkup();
    this.#clearMainView();
    this.#mainContentEl.insertAdjacentHTML("afterbegin", gameDataMarkup);
  }

  #clearQuickView() {
    this.#quickViewEl.innerHTML = "";
  }

  #clearMainView() {
    this.#mainContentEl.innerHTML = "";
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

  #generateGameDataMarkup() {
    console.log(this.#data);

    // Omitting unwanted games - not enough data
    const ffbe = this.#data.ffGames.splice(15, 1);
    const ffx2 = this.#data.ffGames.splice(10, 1);
    const ffxiii2 = this.#data.ffGames.splice(12, 1);

    console.log(this.#data);
    return this.#data.ffGames.map(this.#gameDetails).join("");
  }

  #gameDetails(game) {
    return `
    <div class="game-details-container">
<article class="game-profile--container">
  <div class="game-profile">
    <img id="${game.gameId}"class="game-img" src="${game.picture}"/>
     <div class="game-data-flex">
        <p>Platform: ${game.platform}</p>
        <p>Release: ${game.releaseDate}</p>
      </div>
  </div>
</article>
</div>
<article class="game-description--container">
<div class="game-description">
  <h3 class="game-name">${game.title}</h3>
  <p>${game.description}</p>
</div>
</article>
        `;
  }
}

export default new GameView();
