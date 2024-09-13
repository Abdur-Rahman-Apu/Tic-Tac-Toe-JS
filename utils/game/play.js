import {
  gameBoardContainer,
  gamePartContainer,
  winnerPartContainer,
  winningImg,
  winningMsg,
} from "../elements.js";
import { gameValues } from "../variables.js";
import setActiveBorder from "./activeBorder.js";
import easyMode from "./mode/easy.js";
import hardMode from "./mode/hardMode.js";
import mediumMode from "./mode/medium.js";

const decideOfDisableDiv = (isDisable, elm) => {
  if (isDisable) {
    elm.setAttribute("disabled", true);
  } else {
    elm.removeAttribute("disabled");
  }
};

const updateDomAfterWin = () => {
  if (gameValues.isWinner) {
    winningMsg.textContent = "You Won!";
    winningImg.src = "assets/images/celebration.png";
  } else if (gameValues.isWinner === false) {
    winningMsg.textContent = "You Lost!";
    winningImg.src = "assets/images/lose.png";
  } else {
    winningMsg.textContent = "Tie!";
    winningImg.src = "assets/images/celebration.png";
  }

  gamePartContainer.style.display = "none";
  winnerPartContainer.style.display = "flex";

  if (gameBoardContainer.getAttribute("disabled")) {
    gameBoardContainer.removeAttribute("disabled");
  }
  Array.from(gameBoardContainer.children).forEach((elm) => {
    if (elm.getAttribute("disabled")) {
      elm.removeAttribute("disabled");
    }
    elm.textContent = "";
  });
};

const isWinner = (player) => {
  const playerValues = [...player].sort();
  console.log(playerValues, "player values");

  return gameValues.possibleOutcome.some((item) => {
    let matched = 0;
    for (const value of item) {
      playerValues.includes(value) && matched++;
    }
    console.log(matched, "matched");
    if (matched === 3) {
      return true;
    } else {
      matched = 0;
    }
  });
};

const decideWinner = (isPlayer) => {
  const { player, AI, emptyBoxes } = gameValues;

  console.log(isPlayer, "isPlayer");
  if (!emptyBoxes.length) {
    console.log("checking draw");
    updateDomAfterWin();
    return true;
  }
  if (isPlayer && player.length > 2) {
    console.log("player with length > 2");
    console.log(isWinner(player), "is winner");
    if (isWinner(player)) {
      gameValues.isWinner = true;
      updateDomAfterWin();
      return true;
    }
  }

  if (!isPlayer && AI.length > 2) {
    console.log("AI with length > 2");
    console.log(isWinner(AI), "is winner");
    if (isWinner(AI)) {
      gameValues.isWinner = false;
      updateDomAfterWin();
      return true;
    }
  }
};

export const autoPlay = () => {
  const { AISymbol, mode } = gameValues;
  const value =
    mode.toLowerCase() === "easy"
      ? easyMode()
      : mode.toLowerCase() === "medium"
      ? mediumMode()
      : hardMode();

  const targetElm = gameBoardContainer.querySelector(`div:nth-child(${value})`);
  targetElm.textContent = AISymbol;

  const boxNumber = +targetElm.dataset.box;
  gameValues.AI.push(boxNumber);

  if (gameValues.AI.length > 2 && decideWinner(false)) return;

  decideOfDisableDiv(true, targetElm);
  decideOfDisableDiv(false, gameBoardContainer);
  //   console.log(targetElm);

  gameValues.turn = true;
  setActiveBorder();
};

const play = () => {
  gameBoardContainer.addEventListener("click", (e) => {
    const isDisabled = e.target.textContent;

    console.log(e.target, "disabled");
    console.log(!isDisabled, "is not disabled");

    if (!isDisabled) {
      const parentElm = e.currentTarget;
      const targetElm = e.target;
      const boxNumber = targetElm.dataset.box;

      targetElm.textContent = gameValues.playerSymbol;

      gameValues.player.push(+boxNumber);
      //   find the box into the empty box array
      const emptyBoxIndex = gameValues.emptyBoxes.findIndex(
        (value) => value == boxNumber
      );

      // remove the selected box number
      console.log(gameValues.emptyBoxes, "Player before");
      gameValues.emptyBoxes.splice(emptyBoxIndex, 1);

      console.log(
        gameValues.player.length > 2 && decideWinner(true),
        "decide winner player"
      );
      if (gameValues.player.length > 2 && decideWinner(true)) return;

      console.log(gameValues.emptyBoxes, "Player After");

      gameValues.turn = false;

      decideOfDisableDiv(true, parentElm);
      decideOfDisableDiv(true, targetElm);
      setActiveBorder();
      autoPlay();
    }
  });
};

export { play };
