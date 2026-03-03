import { showExercise01 } from "./modules/exercise-01.js";
import { showExercise02 } from "./modules/exercise-02.js";
import { showExercise03 } from "./modules/exercise-03.js";

const ACTIVITIES_CONFIG = [
  { label: "Iniciar Atividade 1", action: showExercise01 },
  { label: "Iniciar Atividade 2", action: showExercise02 },
  { label: "Iniciar Atividade 3", action: showExercise03 },
];

function createBtn({ label, action }) {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.addEventListener("click", action);
  return btn;
}

function init() {
  const container = document.querySelector("main");

  if (!container) return;

  const fragment = document.createDocumentFragment();

  ACTIVITIES_CONFIG.forEach((config) => {
    const newBtn = createBtn(config);
    fragment.appendChild(newBtn);
  });

  container.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", init);
