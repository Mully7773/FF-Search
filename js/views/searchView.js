class SearchView {
  //   #selectedGameEl = document.querySelector(".section--selected-game");
  //   #navList = document.querySelector(".main-nav-list");
  //   _data;
  //   datasetId;
  //   getQuery(data) {
  //     this._data = data;
  //     console.log(this._data);
  //     this.#navList.addEventListener("click", function (e) {
  //       const li = e.target.closest("li");
  //       const dataId = e.target.dataset.id;
  //       if (!dataId) return;
  //       console.log(dataId);
  //       if (!li) return;
  //       const liValue = li.textContent.trim();
  //       console.log(liValue);
  //       console.log(data.allCharacters);
  //       const filteredOrigin = data.allCharacters.filter(function (game) {
  //         game.origin === liValue;
  //         // console.log(game);
  //         // console.log(game.origin);
  //         // console.log(data);
  //       });
  //       console.log(filteredOrigin);
  //       // console.log(filteredOrigin);
  //       filteredOrigin.forEach(function (data, i) {
  //         console.log(data);
  //         const characterName = data.name;
  //         console.log(characterName);
  //       });
  //     });
  //   }
  // renderGameLogo(data) {
  //   this.#data = data;
  //   const gameLogoMarkup = this.generateGameLogoMarkup();
  //   this.#clear();
  //   this.#selectedGameEl.insertAdjacentHTML("afterbegin", gameLogoMarkup);
  // }
  // #clear() {
  //   this.#selectedGameEl.innerHTML = "";
  // }
  // generateGameLogoMarkup() {
  //   // this.datasetId = datasetId;
  //   // console.log(this.#data);
  //   // console.log(this.#data[0].gameLogo);
  //   // console.log(this.datasetId);
  //   // const gameLogo = datasetId;
  //   // console.log(gameLogo);
  //   return ` <div>
  //            <img class="selected-game-logo" src="${
  //              this.#data[0].gameLogo
  //            }" alt="Picture of Final Fantasy logo"/>
  //           </div>
  //          <div class="divider">Character Select</div>`;
  // }
  // addHandler(handler) {
  //   this.#navList.addEventListener("click", function (e) {
  //     if (!e.target.dataset.id) return;
  //     console.log(e.target.dataset.id);
  //     if (e.target.dataset.id === 1) {
  //       generateGameLogoMarkup();
  //     }
  //   });
  //   handler();
  // }
}

export default new SearchView();
