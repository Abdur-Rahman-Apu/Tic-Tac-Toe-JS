import { startBtn, startPointContainer, tossContainer } from "../elements.js";
import { gameValues } from "../variables.js";

const gameStart = () => {
  startBtn.addEventListener("click", () => {
    startPointContainer.style.display = "none";
    gameValues.startPage = true;
    tossContainer.style.display = "flex";
  });
};

export { gameStart };
