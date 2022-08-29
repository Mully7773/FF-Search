"use strict";

const characterProfileContainer = document.querySelector(
  ".character-profile--container"
);

const characterDescriptionContainer = document.querySelector(
  ".character-description--container"
);

const mainContentEl = document.querySelector(".main-content-grid");

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

getCharacterData();
