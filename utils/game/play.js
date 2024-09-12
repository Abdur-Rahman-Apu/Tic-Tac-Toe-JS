import { gameBoardContainer } from "../elements.js";
import gameValues from "../variables.js";
import setActiveBorder from "./activeBorder.js";

const decideOfDisableDiv = (isDisable, parentElm) => {
  if (isDisable) {
    parentElm.setAttribute("disabled", true);
  } else {
    parentElm.removeAttribute("disabled");
  }
};

const autoPlay = () => {};

const play = () => {
  gameBoardContainer.addEventListener("click", (e) => {
    const targetElm = e.target;
    const parentElm = e.currentTarget;
    if (gameValues.turn) {
      targetElm.textContent = gameValues.playerSymbol;
      gameValues.turn = false;
      //   decideOfDisableDiv(true, parentElm);
      setActiveBorder();
    } else {
      targetElm.textContent = gameValues.AISymbol;
      gameValues.turn = true;
      //   decideOfDisableDiv(false, parentElm);
      setActiveBorder();
    }
  });
};

export { play };
