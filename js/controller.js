import * as model from "./model.js";
import CharacterView from "./views/characterView.js";
import GameView from "./views/gameView.js";
import SelectView from "./views/selectView.js";
import SearchView from "./views/searchView.js";

const controlGames = async function () {
  try {
    await model.loadGame();

    SelectView.renderGameSelect(model.state.game);
    GameView.renderGameData(model.state.allGames);
  } catch (err) {
    console.log(err);
  }
};

const controlSingleCharacters = async function () {
  try {
    await model.loadSingleCharacter();
    //Render Character Data on landing page
    CharacterView.renderSingleCharacter(model.state.character);
  } catch (err) {
    console.log(err);
  }
};

const controlOriginCharacters = async function () {
  try {
    const id = window.location.hash.slice(1);
    const matchingId = id.replaceAll("_", " ");
    console.log(matchingId);
    if (!id || !matchingId) return;
    // console.log(id);
    await model.loadAllCharacters(matchingId);
    SelectView.renderOriginCharacterSelect(model.state.allCharacters.filtered);
  } catch (err) {
    console.log(err);
  }
};

window.addEventListener("hashchange", controlOriginCharacters);

controlGames();
controlSingleCharacters();
// controlSearchResults();

// const controlSearchResults = async function () {
//   try {
// await model.loadSingleCharacter();
// SearchView.getQuery(model.state.allCharacters);
// SearchView.getQuery();
// console.log(query);
// await model.loadSearchResults();
// Should be a new method in the gameView but for now let's use searchView
// SearchView.renderGameLogo(model.state.search);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const init = function () {
//   SearchView.addHandlerSearch(controlSearchResults);
// };

// navList.addEventListener("click", controlSearchResults);

// const init = function () {
//   SearchView.addHandler(controlSearchResults);
// };
// init();
// controlSearchResults();

// init();
// const controlFFI = async function () {
//   try {
//     await model.loadGame();

//     gameView.renderGameLogo(model.allGamesState.allGames);
//   } catch (err) {
//     console.log(err);
//   }
// };

// navList.addEventListener("click", function (e) {
//   controlFFI();
//   let lastSearchedGame = e.target.dataset.id;
//   console.log(lastSearchedGame);
//   if (e.target.dataset.id === lastSearchedGame) {
//     lastSearchedGame = e.target.dataset.id;
//   }
// });
