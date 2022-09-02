"use strict";

const mainContentEl = document.querySelector(".main-content-grid");

const quickViewEl = document.querySelector(".quick-view-grid");
const selectedGameEl = document.querySelector(".section--selected-game");
const navList = document.querySelector(".main-nav-list");

const mogPlaceholder = `../img/M3on3-moogle-from-fandom (2).webp`;
const descPlaceholder = `No description data yet!`;

// const placeholder = "../img/Mini_Choco_Ylw.webp";
// console.log(placeholder);
// placeholder.className = "chocobo-icon";
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

const renderGameData = (data) => {
  console.log(data);
  const ffI = data.filter((game) => game.origin === "Final Fantasy");
  console.log(ffI);

  // const missing = data.filter((game) => game.pictures);

  // console.log(missing);
  // console.log(ffIII[13].pictures[0]);
  // if (ffIII[13].pictures.typeof === "object") {
  //   console.log("true");
  //   return true;
  // }
  navList.addEventListener("click", (e) => {
    let li = e.target.closest("li");
    console.log(li.textContent);
    // Trims spaces at front of string from <li>
    const liValue = li.textContent.trim();
    console.log(liValue);

    const filteredGame = data.filter(
      (game) => game.origin === liValue
      // console.log(game.origin);
    );

    // Initialize variables so that I can append all divs (not just the last one) later using '+=' - set it equal to empty string so that 'undefined' is not displayed
    let quickSelectHtml = "";
    let characterViewHtml = "";

    filteredGame.forEach((data, i) => {
      // Save specific data to variables
      console.log(data);

      let charImgs =
        // Pinpointed where data returned undefined and replaced image with placeholder in that condition - undefined = data type so string 'undefined' doesn't work
        data.pictures[0] === undefined ? mogPlaceholder : data.pictures[0].url;

      const characterName = data.name;
      const characterDescription =
        data.description === null ? descPlaceholder : data.description;
      const characterOrigin = data.origin;
      const characterRace = data.race;
      const characterJob = data.job;
      const characterHeight = data.height;
      const characterAge = data.age;
      const characterWeight = data.weight;
      const characterId = data.id;
      // <a href=""><img class="character-img" src="${charImgs}" /></a>
      console.log(i);

      // '+=' is necessary instead of '=' below otherwise JS will execute all computations before it redraws the page, which means that only the last value of innerHTML would be rendered
      quickSelectHtml += `
    <div class="character-circle-container">

    

     <a class="character-link" href="${characterId}"><img class="character-circle" src="${charImgs}"/></a>
    </div>
    `;
      quickViewEl.innerHTML = quickSelectHtml;

      // Sorts alphabetically
      // quickViewEl.insertAdjacentHTML("beforeend", quickSelectHtml);

      characterViewHtml += `
    <div class="character-details-container">
      <article class="character-profile--container">
        <div class="character-profile">

        
          <img id=${characterId} class="character-img" src="${charImgs}" />
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
        <p>${characterDescription}</p>
      </div>
    </article>`;
      mainContentEl.innerHTML = characterViewHtml;
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
      selectedGameEl.innerHTML = `
      <div>
        <img class="selected-game-logo" src="${currentGame}" alt="Picture of Final Fantasy logo"/>
      </div>`;
    }
  });
};

// Fetch character data
const getCharacterData = async () => {
  try {
    const charRes = await fetch(`https://www.moogleapi.com/api/v1/characters`);
    if (!charRes.ok)
      throw new Error(
        `HTTP error: ${response.status} \u2013 Problem getting character data`
      );
    const charData = await charRes.json();
    console.log(charData);
    return renderGameData(charData);
  } catch (err) {
    console.error(`Fetch problem: ${err.message}`);
  }
};

// Fetch game data
const getGameData = async () => {
  try {
    const gameRes = await fetch(`https://www.moogleapi.com/api/v1/games`);
    if (!gameRes.ok)
      throw new Error(
        `HTTP error: ${response.status} \u2013 Problem getting game data`
      );
    const gameData = await gameRes.json();
    console.log(gameData);
    renderGame(gameData);
  } catch (err) {
    console.error(`Fetch problem: ${err.message}`);
  }
};

getGameData();
getCharacterData();

// Quick view scroll functionality

quickViewEl.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target.parentNode);

  // const id = e.target.parentNode.getAttribute("href");
  // console.log(id);

  if (e.target === null) return;
  else {
    const id = e.target.parentNode.getAttribute("href");
    // console.log(id);
    // Optional chaining used to prevent error when quickViewEl is clicked instead of a href
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  // if (e.target.parentNode.classList.contains("character-link")) {
  //   const id = e.target.getAttribute("href");
  //   console.log(id);
  //   document.querySelector(id).scrollIntoView({
  //     behavior: "smooth",
  //   });
  // }
});

// Scroll to top button functionality
const displayScrollBtnPx = 700;
const scrollBtn = document.querySelector(".back-to-top-btn");

const scrollContainer = () => {
  // returns the entire document element - this way we know how far from the top of the document we've scrolled
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > displayScrollBtnPx) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});

const scrollToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

scrollBtn.addEventListener("click", scrollToTop);
