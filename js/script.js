"use strict";

const characterProfileContainer = document.querySelector(
  ".character-profile--container"
);

const characterDescriptionContainer = document.querySelector(
  ".character-description--container"
);

const mainContentEl = document.querySelector(".main-content-grid");
const quickViewEl = document.querySelector(".quick-view-grid");
const selectedGameEl = document.querySelector(".section--selected-game");
const ffviiEl = document.querySelector(".ffvii");
// Render one character
// const renderOneCharacter = (data) => {
//   const characterPicture = data[193].pictures[0].url;
//   const characterName = data[193].name;
//   const characterDescription = data[193].description;
//   const characterOrigin = data[193].origin;
//   const characterRace = data[193].race;
//   const characterJob = data[193].job;
//   const characterHeight = data[193].height;
//   const characterAge = data[193].age;
//   const characterWeight = data[193].weight;
//   const characterData = data[193];

//   const html = `<div class="character-profile">
//     <img class="character-img" src="${characterPicture}" />
//     <div class="character-data-grid">
//       <p>Origin: ${characterOrigin}</p>
//       <p>Race: ${characterRace}</p>
//       <p>Job: ${characterJob}</p>
//       <p>Height: ${characterHeight}</p>
//       <p>Age: ${characterAge}</p>
//       <p>Weight: ${characterWeight}</p>
//     </div>
//   </div>`;
//   characterProfileContainer.insertAdjacentHTML("afterbegin", html);

//   const descHtml = `
//   <div class="character-description">
//     <h3>${characterName}</h3>
//     <p>
//       ${characterDescription}
//     </p>
//   </div>`;
//   characterDescriptionContainer.insertAdjacentHTML("afterbegin", descHtml);
// };

const renderFFVII = (data) => {
  const ffSeven = data.filter((game) => game.origin === "Final Fantasy VII");
  console.log(ffSeven);

  ffSeven.map((data) => {
    const charImgs = data.pictures[0].url;
    const characterName = data.name;
    const characterDescription = data.description;
    const characterOrigin = data.origin;
    const characterRace = data.race;
    const characterJob = data.job;
    const characterHeight = data.height;
    const characterAge = data.age;
    const characterWeight = data.weight;

    const quickSelectHtml = `
    <div class="character-circle-container">
    <img class="character-circle" src="${charImgs}"/>
    </div>
    `;

    quickViewEl.insertAdjacentHTML("beforeend", quickSelectHtml);

    const html = `
    <article class="character-profile--container">
    <div class="character-profile">
    <img class="character-img" src="${charImgs}" />
    <div class="character-data-grid">
      <p>Origin: ${characterOrigin}</p>
      <p>Race: ${characterRace}</p>
      <p>Job: ${characterJob}</p>
      <p>Height: ${characterHeight}</p>
      <p>Age: ${characterAge}</p>
      <p>Weight: ${characterWeight}</p>
    </div>
  </div>
  </article>
  
  <article class="character-description--container">
          <div class="character-description">
            <h3>${characterName}</h3>
            <p>
            ${characterDescription}
            </p>
          </div>
        </article>`;
    mainContentEl.insertAdjacentHTML("beforeend", html);
  });
};

const renderGame = (data) => {
  const gameLogo = data[6].picture;

  const html = `
    <div>
    <img class="selected-game-logo" src="${gameLogo}" alt="Picture of Final Fantasy logo"/>
  </div>
    `;
  selectedGameEl.insertAdjacentHTML("afterbegin", html);
};

// Fetch character data
const getCharacterData = async () => {
  try {
    const charRes = await fetch(`https://www.moogleapi.com/api/v1/characters`);
    if (!charRes.ok) throw new Error("Problem getting character data");
    const charData = await charRes.json();
    console.log(charData);
    return renderFFVII(charData);
  } catch (err) {
    console.error(err);
  }
};

// Fetch game data
const getGameData = async () => {
  try {
    const gameRes = await fetch(`https://www.moogleapi.com/api/v1/games`);
    if (!gameRes.ok) throw new Error("Problem getting game data");
    const gameData = await gameRes.json();
    console.log(gameData);
    renderGame(gameData);
  } catch (err) {
    console.log(err);
  }
};

getGameData();

getCharacterData();

// ffviiEl.addEventListener("click", getCharacterData);
