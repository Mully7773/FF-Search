import { GAME_API_URL, CHARACTER_API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
  character: {},
  allCharacters: {
    filtered: [],
  },
  game: {},
  allGames: {
    gameLogo: [],
    filtered: [],
  },
};

// For rendering game data on landing page
export const loadGame = async function (origin) {
  try {
    const gameData = await getJSON(`${GAME_API_URL}`);
    const [...games] = gameData;
    const [...allGames] = gameData;

    state.game = {
      ffId1: games[0].gameId,
      ffId2: games[1].gameId,
      ffId3: games[2].gameId,
      ffId4: games[3].gameId,
      ffId5: games[4].gameId,
      ffId6: games[5].gameId,
      ffId7: games[6].gameId,
      ffId8: games[7].gameId,
      ffId9: games[8].gameId,
      ffId10: games[9].gameId,
      ffId12: games[11].gameId,
      ffId13: games[12].gameId,
      ffId15: games[14].gameId,
    };

    state.allGames = {
      ffGames: allGames,
    };

    state.allGames.gameLogo = [
      { picture: allGames[0].picture, title: "Final Fantasy" },
      { picture: allGames[1].picture, title: "Final Fantasy II" },
      { picture: allGames[2].picture, title: "Final Fantasy III" },
      { picture: allGames[3].picture, title: "Final Fantasy IV" },
      { picture: allGames[4].picture, title: "Final Fantasy V" },
      { picture: allGames[5].picture, title: "Final Fantasy VI" },
      { picture: allGames[6].picture, title: "Final Fantasy VII" },
      { picture: allGames[7].picture, title: "Final Fantasy VIII" },
      { picture: allGames[8].picture, title: "Final Fantasy IX" },
      { picture: allGames[9].picture, title: "Final Fantasy X" },
      { picture: allGames[11].picture, title: "Final Fantasy XII" },
      { picture: allGames[12].picture, title: "Final Fantasy XIII" },
      { picture: allGames[14].picture, title: "Final Fantasy XV" },
    ];

    // console.log(state.allGames.gameLogo);

    // console.log(state.allGames);
    // console.log(gameData);
    // state.allGames does not return all games because of live connection between modules - data was spliced in gameView.js
    // console.log(state.allGames);
    // Filter data for logo render based on game origin
    state.allGames.filtered = state.allGames.gameLogo.filter(
      (game) => game.title === `${origin}`
    );
  } catch (err) {
    console.error(`Fetch problem: ${err.message}`);
    throw err;
  }
};

export const loadAllCharacters = async function (origin) {
  try {
    const characterData = await getJSON(`${CHARACTER_API_URL}`);

    // For rendering landing page welcome characters
    const [...characters] = characterData;
    state.character = {
      lagunaImg: characters[229].pictures[0].url,
      cloudImg: characters[193].pictures[0].url,
      viviImg: characters[153].pictures[0].url,
      rikkuImg: characters[242].pictures[0].url,
      lightningImg: characters[259].pictures[0].url,
    };

    // For rendering origin characters
    state.allCharacters.filtered = characterData.filter(
      (character) => character.origin === `${origin}`
    );
  } catch (err) {
    console.log(err);
    throw err;
  }
};
