export const characterState = {
  character: {},
};

// export const gameState = {
//   game: {},
// };

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

    characterState.character = {
      lagunaImg: characters[229].pictures[0].url,
      cloudImg: characters[193].pictures[0].url,
      viviImg: characters[153].pictures[0].url,
      rikkuImg: characters[242].pictures[0].url,
      lightningImg: characters[259].pictures[0].url,
    };

    console.log(characterData);
    console.log(characterState.character);
  } catch (err) {
    console.error(`Fetch problem: ${err.message}`);
  }
};
