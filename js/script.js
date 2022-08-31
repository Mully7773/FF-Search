"use strict";

const characterProfileContainer = document.querySelector(
  ".character-profile--container"
);

const characterDescriptionContainer = document.querySelector(
  ".character-description--container"
);

const mainContentEl = document.querySelector(".main-content-grid");
const characterDetailsEl = document.querySelector(
  ".character-details-container"
);
const characterDescriptionEl = document.querySelector(
  ".character-description--container"
);
const quickViewEl = document.querySelector(".quick-view-grid");
const selectedGameEl = document.querySelector(".section--selected-game");
const ffviiEl = document.querySelector(".ffvii");
const navList = document.querySelector(".main-nav-list");
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
  // // const lastSearched =
  // let categoryGroup;
  // let finalGroup;
  // finalGroup = data;
  console.log(data);

  navList.addEventListener("click", (e) => {
    let li = e.target.closest("li");
    console.log(li.textContent);
    // Trims spaces at front of string from <li>
    const liValue = li.textContent.trim();
    console.log(liValue);

    const ffSeven = data.filter(
      (game) => game.origin === liValue
      // console.log(game.origin);
    );
    console.log(ffSeven);

    // Initialize variables so that I can append all divs (not just the last one) later using '+=' - set it equal to empty string so that 'undefined' is not displayed
    let quickSelectHtml = "";
    let characterViewHtml = "";
    let characterDescriptionHtml = "";

    ffSeven.forEach((data, i) => {
      const charImgs = data.pictures[0].url;
      const characterName = data.name;
      const characterDescription = data.description;
      const characterOrigin = data.origin;
      const characterRace = data.race;
      const characterJob = data.job;
      const characterHeight = data.height;
      const characterAge = data.age;
      const characterWeight = data.weight;

      console.log(i);

      // '+=' is necessary instead of '=' below otherwise JS will execute all computations before it redraws the page, which means that only the last value of innerHTML would be rendered
      quickSelectHtml += `
    <div class="character-circle-container">
    <img class="character-circle" src="${charImgs}"/>
    </div>
    `;

      console.log(quickSelectHtml);

      // console.log(charImgs);

      // Sorts alphabetically
      // quickViewEl.insertAdjacentHTML("beforeend", quickSelectHtml);

      quickViewEl.innerHTML = quickSelectHtml;

      characterViewHtml += `
      <div class="character-details-container">
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
  </div>
  
  
  
  <article class="character-description--container">
  <div class="character-description">
            <h3>${characterName}</h3>
            <p>
            ${characterDescription}
            </p>
          </div>
          </article>
          `;

      // characterDetailsEl.innerHTML = characterViewHtml;
      mainContentEl.innerHTML = characterViewHtml;

      // characterDescriptionHtml += `
      //     <div class="character-description">
      //       <h3>${characterName}</h3>
      //       <p>
      //       ${characterDescription}
      //       </p>
      //     </div>`;

      // characterDescriptionEl.innerHTML = characterDescriptionHtml;
    });
  });
};

const renderGame = (data) => {
  let currentGame;
  // let pictureArray = [];
  // console.log(data);
  // data.map((images) => {
  //   const logos = images.picture;
  //   pictureArray.push(logos);
  // });
  // console.log(pictureArray);
  // const logo = pictureArray.find(picture => picture.id === e.target.dataset.id)

  navList.addEventListener("click", (e) => {
    let li = e.target.closest("li");
    // console.log(li.textContent);
    let lastSearchedGame = e.target.dataset.id;
    console.log(lastSearchedGame);
    const clickedGame = e.target.classList.contains("ffvii");

    // if (e.target.classList.contains("ffvii")) {
    //   console.log("Clicked FFVII");
    //   currentGame = data[6].picture;
    // }

    if (e.target.dataset.id === lastSearchedGame) {
      lastSearchedGame = e.target.dataset.id;
      currentGame = data[lastSearchedGame - 1].picture;
      console.log(currentGame);
      // const html = `
      // <div>
      // <img class="selected-game-logo" src="${currentGame}" alt="Picture of Final Fantasy logo"/>
      // </div>
      // `;
      // selectedGameEl.insertAdjacentHTML("afterbegin", html);
      selectedGameEl.innerHTML = `<div>
      <img class="selected-game-logo" src="${currentGame}" alt="Picture of Final Fantasy logo"/>
      </div>`;
    }

    // if (e.target.classList.contains("ffviii")) {
    //   console.log("Clicked FFVIII");
    //   currentGame = data[7].picture;
    //   // return;
    // }

    // const gameLogo = data[6].picture;

    // const html = `
    // <div>
    // <img class="selected-game-logo" src="${currentGame}" alt="Picture of Final Fantasy logo"/>
    // </div>
    // `;
    // selectedGameEl.insertAdjacentHTML("afterbegin", html);
  });
};

// function updateDisplay() {
//   while (mainContentEl.firstChild) {
//     mainContentEl.removeChild(mainContentEl.firstChild);
//   }
//   for (const data of finalGroup) {
//     getCharacterData(data);
//   }
// }

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

// ffviiEl.addEventListener("click", getCharacterData, { once: true });
// navList.addEventListener("click", (e) => {
//   let li = e.target.closest("li");
//   console.log(li);

//   if (e.target.classList.contains("ffvii")) {
//     console.log("Clicked FFVII");
//   }
// });
