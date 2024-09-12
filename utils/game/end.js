import deepCopy from "../deepCopy.js";
import {
  exitBtn,
  gamePartContainer,
  playAgainBtn,
  startPointContainer,
  winnerPartContainer,
} from "../elements.js";
import { gameValues, initialValues, resetValues } from "../variables.js";

const changeGameValue = (resetObj) => {
  const arr = Object.entries(resetObj);

  for (const item of arr) {
    gameValues[item[0]] = item[1];
  }
};

const endPart = () => {
  // play again functionalities
  playAgainBtn.addEventListener("click", () => {
    changeGameValue({
      ...deepCopy(gameValues),
      ...deepCopy(resetValues),
      turn: gameValues?.isTossWon && true,
    });

    winnerPartContainer.style.display = "none";
    gamePartContainer.style.display = "flex";
  });

  //   reset functionalities
  exitBtn.addEventListener("click", () => {
    changeGameValue({
      ...deepCopy(initialValues),
    });

    winnerPartContainer.style.display = "none";
    startPointContainer.style.display = "flex";
  });
};

export default endPart;
