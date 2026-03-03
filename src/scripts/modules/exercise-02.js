// 2
/*
Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, 
em seguida, peça ao usuário para digitar o nome de um planeta.

Verifique se o planeta que o usuário informou está na array e informe ao usuário.
*/

import { receberString } from "../utils/prompt-manager.js";
import { textNormalizer } from "../utils/text-formatter.js";

const PLANETS = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];
const PLANETS_NORMALIZED = PLANETS.map((str) =>
  textNormalizer(str.toLowerCase()),
);

export function showExercise02() {
  alert(checkPlanetStatus());
}

function checkPlanetStatus() {
  let userPlanet = receberString("Digite um nome de um planeta: ");

  const userPlanetNormalize = textNormalizer(userPlanet.toLowerCase());

  let index = PLANETS_NORMALIZED.indexOf(userPlanetNormalize);
  let hasPlanet = index !== -1;

  let textPlanetFound = hasPlanet ? PLANETS[index] : userPlanet;

  return `O Planeta ${textPlanetFound} ${hasPlanet ? "" : "não "}está no array`;
}
