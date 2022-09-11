class GameView {
  #data;
  #quickViewEl = document.querySelector(".quick-view-grid");
  #mainContentEl = document.querySelector(".main-content-grid");

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
