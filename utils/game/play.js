import { gameBoardContainer, winningImg, winningMsg } from "../elements.js";
import gameValues from "../variables.js";
import setActiveBorder from "./activeBorder.js";
import easyMode from "./mode/easy.js";

const decideOfDisableDiv = (isDisable, elm) => {
  if (isDisable) {
    elm.setAttribute("disabled", true);
  } else {
    elm.removeAttribute("disabled");
  }
};

// const isMatched = (selectedValues) => {
//   gameValues.possibleOutcome.findIndex(
//     (item) => item.toString() === selectedValues.toString()
//   );

//   if (findIndex !== -1) {
//     return false;
//   } else {
//     return true;
//   }
// };

const updateDomAfterWin = () => {
  if (gameValues.isWinner) {
    winningMsg.textContent = "You Won!";
    winningImg.src = "assets/images/celebration.png";
  } else {
    winningMsg.textContent = "You Lost!";
    winningImg.src = "assets/images/lose.png";
  }
};

const isWinner = (player) => {
  const playerValues = [...player].sort();

  return gameValues.possibleOutcome.some(
    (item) => item.toString() === playerValues.toString()
  );
};

const decideWinner = (isPlayer) => {
  const { player, AI, emptyBoxes } = gameValues;

  if (emptyBoxes.length === 1) {
    console.log("checking draw");
  }
  if (isPlayer && player.length > 2) {
    console.log("player with length > 2");
    if (isWinner(player)) {
      gameValues.isWinner = true;
      updateDomAfterWin();
    }
  }

  if (!isPlayer && AI.length > 2) {
    console.log("AI with length > 2");
    if (isWinner(AI)) {
      gameValues.isWinner = false;
      updateDomAfterWin();
    }
  }
};

const autoPlay = () => {
  const { AISymbol } = gameValues;
  const value = easyMode();
  const targetElm = gameBoardContainer.querySelector(`div:nth-child(${value})`);
  const boxNumber = +targetElm.dataset.box;
  gameValues.AI.push(boxNumber);
  decideOfDisableDiv(true, targetElm);
  decideOfDisableDiv(false, gameBoardContainer);
  console.log(targetElm);
  targetElm.textContent = AISymbol;
  gameValues.turn = true;
  setActiveBorder();
};

const play = () => {
  gameBoardContainer.addEventListener("click", (e) => {
    const isDisabled = e.target.getAttribute("disabled");

    if (!isDisabled) {
      const parentElm = e.currentTarget;
      const targetElm = e.target;
      const boxNumber = targetElm.dataset.box;

      gameValues.player.push(+boxNumber);
      //   find the box into the empty box array
      const emptyBoxIndex = gameValues.emptyBoxes.findIndex(
        (value) => value == boxNumber
      );

      // remove the selected box number
      console.log(gameValues.emptyBoxes, "Player before");
      gameValues.emptyBoxes.splice(emptyBoxIndex, 1);

      console.log(gameValues.emptyBoxes, "Player After");

      targetElm.textContent = gameValues.playerSymbol;
      gameValues.turn = false;

      decideOfDisableDiv(true, parentElm);
      decideOfDisableDiv(true, targetElm);
      setActiveBorder();
      autoPlay();
    }
  });
};

export { play };
