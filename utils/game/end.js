import deepCopy from "../deepCopy.js";
import {
  exitBtn,
  gameModeName,
  gamePartContainer,
  headBtn,
  playAgainBtn,
  startPointContainer,
  tailBtn,
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

    headBtn.style.display = "inline-block";
    headBtn.removeAttribute("disabled");
    headBtn.style.cursor = "pointer";
    tailBtn.style.display = "inline-block";
    tailBtn.removeAttribute("disabled");
    tailBtn.style.cursor = "pointer";

    gameModeName.textContent = "Easy";

    startPointContainer.style.display = "flex";
  });
};

export default endPart;
