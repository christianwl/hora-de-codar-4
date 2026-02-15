import { verificarParada } from "./services/atividade-1.js";
import { verificaPlaneta } from "./services/atividade-2.js";
import { retirarFrutas } from "./services/atividade-3.js";

const ACTIVITIES_CONFIG = [
  { label: "Iniciar Atividade 1", action: verificarParada },
  { label: "Iniciar Atividade 2", action: verificaPlaneta },
  { label: "Iniciar Atividade 3", action: retirarFrutas },
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
