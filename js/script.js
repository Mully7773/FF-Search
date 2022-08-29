"use strict";

const characterProfileContainer = document.querySelector(
  ".character-profile--container"
);

// Fetch character data
const getCharacterData = async () => {
  try {
    const charRes = await fetch(`https://www.moogleapi.com/api/v1/characters`);
    if (!charRes.ok) throw new Error("Problem getting character data");
    const charData = await charRes.json();
    console.log(charData);
  } catch (err) {
    console.error(err);
  }
};

getCharacterData();
