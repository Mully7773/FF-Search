export const state = {
  character: {},
  allCharacters: {},
  game: {},
  allGames: {},
};

export const singleCharacterState = {
  character: {},
};

export const allCharacterState = {
  allCharacters: {},
};

export const gameState = {
  game: {},
};

export const allGamesState = {
  allGames: {},
};

// For rendering single character data
export const loadSingleCharacter = async function () {
  try {
    const characterRes = await fetch(
      `https://www.moogleapi.com/api/v1/characters`
    );
    const characterData = await characterRes.json();
    if (!characterRes)
      throw new Error(
        `HTTP error: ${response.status} \u2013 Problem getting character data`
      );

    const [...characters] = characterData;
    const [...allCharacters] = characterData;

    state.character = {
      lagunaImg: characters[229].pictures[0].url,
      cloudImg: characters[193].pictures[0].url,
      viviImg: characters[153].pictures[0].url,
      rikkuImg: characters[242].pictures[0].url,
      lightningImg: characters[259].pictures[0].url,
    };

    // const navList = document.querySelector(".main-nav-list");
    // navList.addEventListener("click", (e) => {
    //   let li = e.target.closest("li");
    //   const liValue = li.textContent.trim();
    //   console.log(liValue);
    //   allCharacterState.allCharacters = {
    //     ffCharacters: allCharacters.filter(
    //       (character) => character.origin === "Final Fantasy V"
    //     ),
    //   };
    // });

    state.allCharacters = {
      ffCharacters: allCharacters,
    };

    console.log(characterData);
    console.log(state.character);
    console.log(state.allCharacters);
  } catch (err) {
    console.error(`Fetch problem: ${err.message}`);
  }
};

// For rendering game data
export const loadGame = async function () {
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

    console.log(gameData);
    console.log(state.allGames);
  } catch (err) {
    console.error(`Fetch problem: ${err.message}`);
  }
};
