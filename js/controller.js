import * as model from "./model.js";
import TopView from "./views/topView.js";
import SelectView from "./views/selectView.js";
import MainView from "./views/mainView.js";

const controlWelcomeCharacters = async function () {
  try {
    await model.loadAllCharacters();
    //Render Character Data on landing page
    TopView.renderWelcomeCharacters(model.state.character);
  } catch (err) {
    console.log(err);
  }
};

const controlGames = async function () {
  try {
    SelectView._renderSpinner();
    await model.loadGame();
    SelectView.renderGameSelect(model.state.game);
    MainView.renderGameData(model.state.allGames);
  } catch (err) {
    console.log(err);
    SelectView._renderError();
  }
};

const controlOrigin = async function () {
  try {
    const id = window.location.hash.slice(1) || "";
    const matchingId = id.replaceAll("_", " ");
    // console.log(matchingId);
    if (!id || !matchingId) return;
    SelectView._renderSpinner();
    // console.log(id);
    await model.loadGame(matchingId);
    await model.loadAllCharacters(matchingId);
    TopView.renderLogo(model.state.allGames.filtered);
    SelectView.renderOriginCharacterSelect(model.state.allCharacters.filtered);
    MainView.renderOriginCharacterMain(model.state.allCharacters.filtered);
  } catch (err) {
    console.log(err);
    SelectView._renderError();
  }
};

controlWelcomeCharacters();
controlGames();

const init = function () {
  TopView.addHandlerRender(controlOrigin);
  SelectView.addHandlerRender(controlOrigin);
  MainView.addHandlerRender(controlOrigin);
};
init();
