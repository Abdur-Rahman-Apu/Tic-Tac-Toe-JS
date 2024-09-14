import { startBtn, startPointContainer, tossContainer } from "../elements.js";
import { clickSound } from "../sounds.js";
import { gameValues } from "../variables.js";

const gameStart = () => {
  startBtn.addEventListener("click", () => {
    clickSound();
    startPointContainer.style.display = "none";
    gameValues.startPage = true;
    tossContainer.style.display = "flex";
  });
};

export { gameStart };
