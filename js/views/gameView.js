class GameView {
  #data;
  #mainContentEl = document.querySelector(".main-content-grid");

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

  renderGameData(data) {
    this.#data = data;
    const gameDataMarkup = this.#generateGameDataMarkup();
    this.#clearMainView();
    this.#mainContentEl.insertAdjacentHTML("afterbegin", gameDataMarkup);
  }

  #clearMainView() {
    this.#mainContentEl.innerHTML = "";
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
