import View from "./View.js";

class MainView extends View {
  #data;
  #selectedGameEl = document.querySelector(".section--selected-game");
  _parentElement = document.querySelector(".main-content-grid");

  // Possibly export to a parent 'View'

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((e) => window.addEventListener(e, handler));
    // This would also be exported to parent 'View'
    const scrollBtn = document.querySelector(".back-to-top-btn");
    const displayScrollBtnPx = 700;
    const homeLogo = document.querySelector(".diamond");
    document.addEventListener("scroll", function () {
      if (document.documentElement.scrollTop > displayScrollBtnPx) {
        scrollBtn.classList.remove("hidden");
      } else {
        scrollBtn.classList.add("hidden");
      }
    });
    scrollBtn.addEventListener("click", function () {
      document.body.scrollIntoView({
        behavior: "smooth",
      });
    });

    // Necessary for using the back button to return to landing page - hash must be set to empty string - may change when deployed
    window.addEventListener("hashchange", (event) => {
      console.log(window.location);
      this.#selectedGameEl.scrollIntoView({
        behavior: "smooth",
      });
      if (window.location.hash === "") {
        window.location.reload();
      }
      console.log(
        `location: ${document.location}, state: ${JSON.stringify(event.state)}`
      );
    });
    // Refresh
    // const refresh = () => window.location.reload();
    const refresh = () => {
      window.location.assign("");
    };

    homeLogo.addEventListener("click", refresh);
  }

  //   Renders landing page game data
  renderGameData(data) {
    this.#data = data;
    const gameDataMarkup = this.#generateGameDataMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", gameDataMarkup);
  }

  #generateGameDataMarkup() {
    // console.log(this.#data);

    // Omitting unwanted games - not enough data/not main series
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
                <img id="#${game.gameId}"class="game-img" src="${game.picture}"/>
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

  // Renders character profiles
  renderOriginCharacterMain(data) {
    this.#data = data;
    const characterDataMarkup = this.#generateCharacterDataMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", characterDataMarkup);
  }

  #generateCharacterDataMarkup() {
    return this.#data.map(this.#characterDetails).join("");
  }

  #characterDetails(character) {
    // Placeholders for missing data
    const mogPlaceholder = `../../img/M3on3-moogle-from-fandom (2).webp`;
    const descriptionPlaceholder = `No description data yet!`;

    let characterImgs =
      character.pictures[0] === undefined
        ? mogPlaceholder
        : character.pictures[0].url;
    return `
    <div class="character-details-container">
      <article class="character-profile--container">
        <div class="character-profile">
          <img id=#${
            character.id
          } class="character-img" src="${characterImgs}" />
            <div class="character-data-grid">
              <p>Gender: ${character.gender}</p>
              <p>Race: ${character.race}</p>
              <p>Job: ${character.job}</p>
              <p>Height: ${character.height}</p>
              <p>Age: ${character.age}</p>
              <p>Weight: ${character.weight}</p>
            </div>
        </div>
      </article>
    </div>

    <article class="character-description--container">
      <div class="character-description">
        <h3 class="character-name">${character.name}</h3>
        <p>${
          character.description === null
            ? descriptionPlaceholder
            : character.description
        }</p>
      </div>
    </article>
        `;
  }
}
export default new MainView();
