import * as model from "./model.js";
import CharacterView from "./views/characterView.js";
import GameView from "./views/gameView.js";

const controlGames = async function () {
  try {
    await model.loadGame();

    GameView.renderGameSelect(model.gameState.game);
    GameView.renderGameData(model.allGamesState.games);
  } catch (err) {
    console.log(err);
  }
};

const controlCharacters = async function () {
  try {
    await model.loadSingleCharacter();

    CharacterView.renderSingleCharacter(model.characterState.character);
  } catch (err) {
    console.log(err);
  }
};

controlGames();
controlCharacters();

// const controlGames = async function () {
//   try {
//     // load game
//     await model.loadGame();

//     //render game
//     gameView.render(model.gameState.game);
//   } catch (err) {
//     console.log(err);
//   }
// };

// controlGames();

// const homeLogo = document.querySelector(".diamond");
// const mainContentEl = document.querySelector(".main-content-grid");
// const quickViewEl = document.querySelector(".quick-view-grid");
// const selectedGameEl = document.querySelector(".section--selected-game");
// const navList = document.querySelector(".main-nav-list");

// const mogPlaceholder = `../img/M3on3-moogle-from-fandom (2).webp`;
// const descPlaceholder = `No description data yet!`;

// // const placeholder = "../img/Mini_Choco_Ylw.webp";
// // console.log(placeholder);
// // placeholder.className = "chocobo-icon";
// // Render one character
// // const renderOneCharacter = (data) => {
// //   const characterPicture = data[193].pictures[0].url;
// //   const characterName = data[193].name;
// //   const characterDescription = data[193].description;
// //   const characterOrigin = data[193].origin;
// //   const characterRace = data[193].race;
// //   const characterJob = data[193].job;
// //   const characterHeight = data[193].height;
// //   const characterAge = data[193].age;
// //   const characterWeight = data[193].weight;
// //   const characterData = data[193];

// //   const html = `<div class="character-profile">
// //     <img class="character-img" src="${characterPicture}" />
// //     <div class="character-data-grid">
// //       <p>Origin: ${characterOrigin}</p>
// //       <p>Race: ${characterRace}</p>
// //       <p>Job: ${characterJob}</p>
// //       <p>Height: ${characterHeight}</p>
// //       <p>Age: ${characterAge}</p>
// //       <p>Weight: ${characterWeight}</p>
// //     </div>
// //   </div>`;
// //   characterProfileContainer.insertAdjacentHTML("afterbegin", html);

// //   const descHtml = `
// //   <div class="character-description">
// //     <h3>${characterName}</h3>
// //     <p>
// //       ${characterDescription}
// //     </p>
// //   </div>`;
// //   characterDescriptionContainer.insertAdjacentHTML("afterbegin", descHtml);
// // };

// const renderSpinner = (parentEl) => {
//   const markup = `
//   <div class="spinner">
//   <img
//     class="spinner-icon"
//     src="./img/Mini_Choco_Ylw-from-fandom.webp"
//   />
//   <div class="loading">
//     <p class="loading-text">
//       Loading<span class="dot first-dot">.</span
//       ><span class="dot second-dot">.</span
//       ><span class="dot third-dot">.</span>
//     </p>
//   </div>
// </div>
//   `;
//   parentEl.innerHTML = "";
//   parentEl.insertAdjacentHTML("afterbegin", markup);
// };

// const renderSingleCharacters = (data) => {
//   // Render plain HTML
//   // console.log(data);
//   const laguna = data[229].pictures[0].url;
//   const cloud = data[193].pictures[0].url;
//   const vivi = data[153].pictures[0].url;
//   const rikku = data[242].pictures[0].url;
//   const lightning = data[259].pictures[0].url;

//   const pageHeadline = `
//     <div class="fade-in-characters">
//       <div><img class="intro-circle laguna" src="${laguna}"/></div>
//       <div><img class="intro-circle cloud" src="${cloud}"/></div>
//       <div><img class="intro-circle vivi" src="${vivi}"/></div>
//       <div><img class="intro-circle rikku" src="${rikku}"/></div>
//       <div><img class="intro-circle lightning" src="${lightning}"/></div>
//       </div>
//       <h1 class="headline">Search for games, characters, and more</h1>
//     <div class="divider">Game Select</div>

//     `;

//   selectedGameEl.innerHTML = pageHeadline;
// };

// const renderGameInit = (data) => {
//   console.log(data);
//   const ffId1 = data[0].gameId;
//   const ffId2 = data[1].gameId;
//   const ffId3 = data[2].gameId;
//   const ffId4 = data[3].gameId;
//   const ffId5 = data[4].gameId;
//   const ffId6 = data[5].gameId;
//   const ffId7 = data[6].gameId;
//   const ffId8 = data[7].gameId;
//   const ffId9 = data[8].gameId;
//   const ffId10 = data[9].gameId;
//   const ffId12 = data[11].gameId;
//   const ffId13 = data[12].gameId;
//   const ffId15 = data[14].gameId;

//   // Render plain HTML

//   const gameCircles = `

// <a class="number-select ffI-circle" href=${ffId1}><div class="game-circle">I</div></a>
// <a class="number-select ffII-circle" href=${ffId2}><div class="game-circle">II</div></a>
// <a class="number-select ffIII-circle" href=${ffId3}><div class="game-circle">III</div></a>
// <a class="number-select ffIV-circle" href=${ffId4}><div class="game-circle">IV</div></a>
// <a class="number-select ffV-circle" href=${ffId5}><div class="game-circle">V</div></a>
// <a class="number-select ffVI-circle" href=${ffId6}><div class="game-circle">VI</div></a>
// <a class="number-select ffVII-circle" href=${ffId7}><div class="game-circle">VII</div></a>
// <a class="number-select ffVIII-circle" href=${ffId8}><div class="game-circle">VIII</div></a>
// <a class="number-select ffIX-circle" href=${ffId9}><div class="game-circle">IX</div></a>
// <a class="number-select ffX-circle" href=${ffId10}><div class="game-circle">X</div></a>
// <a class="number-select ffXII-circle" href=${ffId12}><div class="game-circle">XII</div></a>
// <a class="number-select ffXIII-circle" href=${ffId13}><div class="game-circle">XIII</div></a>
// <a class="number-select ffXV-circle" href=${ffId15}><div class="game-circle">XV</div></a>
// `;

//   // <div class="character-circle-container">

//   // {/* <a class="character-link" href="${characterId}"><img class="character-circle" src="${charImgs}"/></a>
//   // </div> */}

//   quickViewEl.innerHTML = gameCircles;
//   console.log(data);

//   // Omitting FFX-2, FFXIII-2, and FFBE
//   const ffbe = data.splice(15, 1);
//   const ffx2 = data.splice(10, 1);
//   const ffxiii2 = data.splice(12, 1);
//   console.log(data);

//   let gameHtml = "";
//   const gameImgs = data.forEach((game) => {
//     console.log(game);
//     const gameImg = game.picture;
//     const gamePlatform = game.platform;
//     const gameRelease = game.releaseDate;
//     const gameTitle = game.title;
//     const gameDesc = game.description;
//     const gameId = game.gameId;

//     gameHtml += `
//     <div class="game-details-container">
//       <article class="game-profile--container">
//         <div class="game-profile">
//           <img id="${gameId}"class="game-img" src="${gameImg}"/>
//             <div class="game-data-flex">
//               <p>Platform: ${gamePlatform}</p>
//               <p>Release: ${gameRelease}</p>
//             </div>
//         </div>
//       </article>
//     </div>

//     <article class="game-description--container">
//       <div class="game-description">
//         <h3 class="game-name">${gameTitle}</h3>
//         <p>${gameDesc}</p>
//       </div>
//     </article>`;
//     mainContentEl.innerHTML = gameHtml;
//   });
// };

// const renderGameData = (data) => {
//   // const missing = data.filter((game) => game.pictures);

//   // console.log(missing);
//   // console.log(ffIII[13].pictures[0]);
//   // if (ffIII[13].pictures.typeof === "object") {
//   //   console.log("true");
//   //   return true;
//   // }
//   navList.addEventListener("click", (e) => {
//     let li = e.target.closest("li");
//     console.log(li.textContent);
//     // Trims spaces at front of string from <li>
//     const liValue = li.textContent.trim();
//     console.log(liValue);

//     const filteredGame = data.filter(
//       (game) => game.origin === liValue
//       // console.log(game.origin);
//     );

//     // Initialize variables so that I can append all divs (not just the last one) later using '+=' - set it equal to empty string so that 'undefined' is not displayed
//     let quickSelectHtml = "";
//     let characterViewHtml = "";

//     filteredGame.forEach((data, i) => {
//       // Save specific data to variables
//       console.log(data);

//       let charImgs =
//         // Pinpointed where data returned undefined and replaced image with placeholder in that condition - undefined = data type so string 'undefined' doesn't work
//         data.pictures[0] === undefined ? mogPlaceholder : data.pictures[0].url;

//       const characterName = data.name;
//       const characterDescription =
//         data.description === null ? descPlaceholder : data.description;
//       const characterOrigin = data.origin;
//       const characterGender = data.gender;
//       const characterRace = data.race;
//       const characterJob = data.job;
//       const characterHeight = data.height;
//       const characterAge = data.age;
//       const characterWeight = data.weight;
//       const characterId = data.id;
//       // <a href=""><img class="character-img" src="${charImgs}" /></a>
//       console.log(i);

//       // '+=' is necessary instead of '=' below otherwise JS will execute all computations before it redraws the page, which means that only the last value of innerHTML would be rendered
//       quickSelectHtml += `
//     <div class="character-circle-container">

//      <a class="character-link" href="${characterId}"><img class="character-circle" src="${charImgs}"/></a>
//     </div>
//     `;
//       quickViewEl.innerHTML = quickSelectHtml;

//       // Sorts alphabetically
//       // quickViewEl.insertAdjacentHTML("beforeend", quickSelectHtml);

//       characterViewHtml += `
//     <div class="character-details-container">
//       <article class="character-profile--container">
//         <div class="character-profile">

//           <img id=${characterId} class="character-img" src="${charImgs}" />
//             <div class="character-data-grid">
//               <p>Gender: ${characterGender}</p>
//               <p>Race: ${characterRace}</p>
//               <p>Job: ${characterJob}</p>
//               <p>Height: ${characterHeight}</p>
//               <p>Age: ${characterAge}</p>
//               <p>Weight: ${characterWeight}</p>
//             </div>
//         </div>
//       </article>
//     </div>

//     <article class="character-description--container">
//       <div class="character-description">
//         <h3 class="character-name">${characterName}</h3>
//         <p>${characterDescription}</p>
//       </div>
//     </article>`;
//       mainContentEl.innerHTML = characterViewHtml;
//     });
//   });
// };

// const renderGame = (data) => {
//   let currentGame;
//   // let pictureArray = [];
//   // console.log(data);
//   // data.map((images) => {
//   //   const logos = images.picture;
//   //   pictureArray.push(logos);
//   // });
//   // console.log(pictureArray);
//   // const logo = pictureArray.find(picture => picture.id === e.target.dataset.id)

//   navList.addEventListener("click", (e) => {
//     let li = e.target.closest("li");
//     // console.log(li.textContent);
//     let lastSearchedGame = e.target.dataset.id;
//     console.log(lastSearchedGame);
//     const clickedGame = e.target.classList.contains("ffvii");

//     // if (e.target.classList.contains("ffvii")) {
//     //   console.log("Clicked FFVII");
//     //   currentGame = data[6].picture;
//     // }

//     if (e.target.dataset.id === lastSearchedGame) {
//       lastSearchedGame = e.target.dataset.id;
//       currentGame = data[lastSearchedGame - 1].picture;
//       console.log(currentGame);
//       selectedGameEl.innerHTML = `
//       <div>
//         <img class="selected-game-logo" src="${currentGame}" alt="Picture of Final Fantasy logo"/>
//       </div>
//       <div class="divider">Character Select</div>

//       `;
//     }
//     scrollToTop();
//   });
// };

// // Fetch character data
// const getCharacterData = async () => {
//   try {
//     renderSpinner(quickViewEl);
//     const charRes = await fetch(`https://www.moogleapi.com/api/v1/characters`);
//     if (!charRes.ok)
//       throw new Error(
//         `HTTP error: ${response.status} \u2013 Problem getting character data`
//       );
//     const charData = await charRes.json();
//     console.log(charData);
//     renderGameData(charData);
//     renderSingleCharacters(charData);
//   } catch (err) {
//     console.error(`Fetch problem: ${err.message}`);
//   }
// };

// // Fetch game data
// const getGameData = async () => {
//   try {
//     const gameRes = await fetch(`https://www.moogleapi.com/api/v1/games`);
//     if (!gameRes.ok)
//       throw new Error(
//         `HTTP error: ${response.status} \u2013 Problem getting game data`
//       );
//     const gameData = await gameRes.json();
//     console.log(gameData);
//     renderGameInit(gameData);
//     renderGame(gameData);
//   } catch (err) {
//     console.error(`Fetch problem: ${err.message}`);
//   }
// };

// getGameData();
// getCharacterData();

// // Quick view scroll functionality

// quickViewEl.addEventListener("click", function (e) {
//   e.preventDefault();
//   // console.log(e.target.parentNode);

//   // const id = e.target.parentNode.getAttribute("href");
//   // console.log(id);

//   if (e.target === null) return;
//   else {
//     const id = e.target.parentNode.getAttribute("href");
//     // console.log(id);
//     // Optional chaining used to prevent error when quickViewEl is clicked instead of a href
//     document.getElementById(id)?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }

//   // if (e.target.parentNode.classList.contains("character-link")) {
//   //   const id = e.target.getAttribute("href");
//   //   console.log(id);
//   //   document.querySelector(id).scrollIntoView({
//   //     behavior: "smooth",
//   //   });
//   // }
// });

// // Scroll to top button functionality
// const displayScrollBtnPx = 700;
// const scrollBtn = document.querySelector(".back-to-top-btn");

// const scrollContainer = () => {
//   // returns the entire document element - this way we know how far from the top of the document we've scrolled
//   return document.documentElement || document.body;
// };

// document.addEventListener("scroll", () => {
//   if (scrollContainer().scrollTop > displayScrollBtnPx) {
//     scrollBtn.classList.remove("hidden");
//   } else {
//     scrollBtn.classList.add("hidden");
//   }
// });

// const scrollToTop = () => {
//   document.body.scrollIntoView({
//     behavior: "smooth",
//   });
// };

// scrollBtn.addEventListener("click", scrollToTop);

// //Refresh back to landing page

// const refresh = () => window.location.reload();
// homeLogo.addEventListener("click", refresh);
