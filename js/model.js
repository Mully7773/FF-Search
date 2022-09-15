export const state = {
  character: {},
  allCharacters: {
    filtered: [],
  },
  game: {},
  allGames: {
    gameLogo: [],
    gameName: [],
    filtered: [],
  },
  search: {},
  ffV: {
    logo: {},
    characters: [],
  },
};

// For rendering characters at top of landing page
export const loadWelcomeCharacters = async function () {
  try {
    const characterRes = await fetch(
      `https://www.moogleapi.com/api/v1/characters`
    );
    const characterData = await characterRes.json();
    if (!characterRes)
      throw new Error(
        `HTTP error: ${response.status} \u2013 Problem getting character data`
      );

    // Make copy of data
    const [...characters] = characterData;

    state.character = {
      lagunaImg: characters[229].pictures[0].url,
      cloudImg: characters[193].pictures[0].url,
      viviImg: characters[153].pictures[0].url,
      rikkuImg: characters[242].pictures[0].url,
      lightningImg: characters[259].pictures[0].url,
    };

    console.log(state.character);
  } catch (err) {
    console.error(`Fetch problem: ${err.message}`);
  }
};

// For rendering game data
export const loadGame = async function (origin) {
  try {
    const gameRes = await fetch(`https://www.moogleapi.com/api/v1/games`);
    const gameData = await gameRes.json();
    if (!gameRes.ok)
      throw new Error(`
    HTTP error: ${response.status} \u2013 Problem getting game data
    `);
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

    //Put ${origin} where ffI, ffII, etc., is below?

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

    state.allGames.gameName = {
      ffI: `${origin}`,
      ffII: `${origin}`,
      ffIII: `${origin}`,
      ffIV: `${origin}`,
      ffV: `${origin}`,
      ffVI: `${origin}`,
      ffVII: `${origin}`,
      ffVIII: `${origin}`,
      ffIX: `${origin}`,
      ffX: `${origin}`,
      ffXII: `${origin}`,
      ffXIII: `${origin}`,
      ffXV: `${origin}`,
    };

    // console.log(allGames[0].title);

    console.log(state.allGames.gameLogo);

    console.log(state.allGames);
    console.log(gameData);
    // state.allGames does not return all games because of live connection between modules - data was spliced in gameView.js
    console.log(state.allGames);
    state.allGames.filtered = state.allGames.gameLogo.filter(
      (game) => game.title === `${origin}`
    );
  } catch (err) {
    console.error(`Fetch problem: ${err.message}`);
  }
};

export const loadAllCharacters = async function (origin) {
  try {
    const characterRes = await fetch(
      `https://www.moogleapi.com/api/v1/characters`
    );
    const characterData = await characterRes.json();
    if (!characterRes.ok)
      throw new Error(
        `HTTP error: ${response.status} \u2013 Problem getting character data`
      );
    console.log(characterData);
    state.allCharacters.filtered = characterData.filter(
      (character) => character.origin === `${origin}`
    );
  } catch (err) {
    console.log(err);
  }
};

// export const loadSearchResults = async function () {
//   try {
//     // state.search = query;
//     const gameRes = await fetch(`https://www.moogleapi.com/api/v1/games`);
//     const gameData = await gameRes.json();
//     console.log(gameData);
//     state.search = gameData.map((game) => {
//       return {
//         gameId: game.gameId,
//         gameLogo: game.picture,
//         gameTitle: game.title,
//       };
//     });
//     console.log(state.search);
//   } catch (err) {
//     console.log(err);
//   }
// };
