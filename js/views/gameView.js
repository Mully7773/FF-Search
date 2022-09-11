class GameView {
  #data;
  #quickViewEl = document.querySelector(".quick-view-grid");

  renderGameSelect(data) {
    this.#data = data;
  }
}

export default new GameView();

// class GameView {
//   #homeLogo = document.querySelector(".diamond");
//   #mainContentEl = document.querySelector(".main-content-grid");
//   #quickViewEl = document.querySelector(".quick-view-grid");
//   #selectedGameEl = document.querySelector(".section--selected-game");
//   #navList = document.querySelector(".main-nav-list");
//   #data;

//   render(data) {
//     this.#data = data;
//     const markup = this.#generateMarkup();
//     this.#clear();
//     this.#mainContentEl.insertAdjacentHTML("afterbegin", markup);
//   }

//   #clear() {
//     this.#mainContentEl.innerHTML = "";
//   }

//   #generateMarkup() {
//     console.log(this.#data);
//     console.log(this.#data.ffGames[0].releaseDate);
//     // const gameReleaseDate = this.#data.ffGames[0].releaseDate;
//     let test;

//     return this.#data.ffGames.map(this.#platformRelease);
//   }

//   #platformRelease(game) {
//     return `
//     <div class="game-details-container">
//         <article class="game-profile--container">
//           <div class="game-profile">
//             <img id=""class="game-img" src="${game.picture}"/>
//     <div class="game-data-flex">
//                 <p>Platform:${game.platform}</p>
//                 <p>Release:${game.releaseDate}</p>
//               </div>
//               </div>
//               </article>
//             </div>

//             <article class="game-description--container">
//               <div class="game-description">
//                 <h3 class="game-name"></h3>
//                 <p></p>
//               </div>
//             </article>
//     `;
//   }
// }

// export default new GameView();
