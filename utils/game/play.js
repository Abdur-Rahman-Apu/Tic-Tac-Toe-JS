import {
  gameBoardContainer,
  gamePartContainer,
  winnerPartContainer,
  winningImg,
  winningMsg,
} from "../elements.js";
import {
  circleSound,
  crossSound,
  loseSound,
  tieSound,
  winSound,
} from "../sounds.js";
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

const updateDomAfterWin = (line) => {
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
  if (line) {
    styleBoxStyle("#dfe4ea", line);

    lineCssStyle({
      "--line-top": "null",
      "--line-left": "null",
      "--line-bottom": "null",
      "--line-right": "null",
      "--line-rotate": "null",
      "--line-height": "null",
      "--line-show": "0px",
    });
  }
};

const styleBoxStyle = (bgColor, line) => {
  for (let boxNum of line) {
    const style = {
      backgroundColor: bgColor,
    };

    const boxElm = gameBoardContainer.querySelector(`div:nth-child(${boxNum})`);

    Object.assign(boxElm.style, style);
  }
};

const lineCssStyle = (newStyle) => {
  for (const property in newStyle) {
    gameBoardContainer.style.setProperty(property, newStyle[property]);
  }
};

const sketchLineAddedIntoDom = (newStyle, line) => {
  console.log("into line add into dom");

  styleBoxStyle("#55efc4", line);

  console.log(newStyle, "new style");

  lineCssStyle(newStyle);
};

const sketchLineDraw = (player) => {
  console.log("here");
  const { possibleOutcome } = gameValues;

  for (const value of possibleOutcome) {
    const { result, line } = isThisWinnerLine(value, player);

    console.log(result, line, "result", "line");

    if (result) {
      let basicStyle = {
        "--line-height": "250px",
        "--line-show": "block",
        "--line-top": "0%",
        "--line-left": "50%",
      };

      switch (line.toString()) {
        case "1,2,3":
          basicStyle = {
            ...basicStyle,
            "--line-top": "-32%",
            "--line-left": "50%",
            "--line-rotate": "rotate(90deg)",
            "--line-bottom": "null",
            "--line-right": "null",
          };

          break;

        case "4,5,6":
          basicStyle = {
            ...basicStyle,
            "--line-rotate": "rotate(90deg)",
            "--line-bottom": "null",
            "--line-right": "null",
          };

          break;

        case "7,8,9":
          delete basicStyle["--line-top"];
          basicStyle = {
            ...basicStyle,
            "--line-bottom": "-35%",
            "--line-left": "50%",
            "--line-rotate": "rotate(90deg)",
            "--line-top": "null",
            "--line-right": "null",
          };

          break;

        case "1,4,7":
          basicStyle = {
            ...basicStyle,
            "--line-top": "10%",
            "--line-left": "15%",
            "--line-rotate": "rotate(0deg)",
            "--line-bottom": "null",
            "--line-right": "null",
          };

          break;

        case "2,5,8":
          basicStyle = {
            ...basicStyle,
            "--line-rotate": "rotate(0deg)",
            "--line-bottom": "null",
            "--line-right": "null",
          };

          break;

        case "3,6,9":
          basicStyle = {
            ...basicStyle,
            "--line-top": "0%",
            "--line-right": "15%",
            "--line-rotate": "rotate(0deg)",
            "--line-bottom": "null",
            "--line-left": "null",
          };

          break;

        case "1,5,9":
          basicStyle = {
            ...basicStyle,
            "--line-rotate": "rotate(-45deg)",
            "--line-bottom": "null",
            "--line-right": "null",
          };

          break;

        case "3,5,7":
          basicStyle = {
            ...basicStyle,
            "--line-rotate": "rotate(45deg)",
            "--line-bottom": "null",
            "--line-right": "null",
          };

          break;
      }

      sketchLineAddedIntoDom(basicStyle, line);
      return line;
    }
  }
};

const isThisWinnerLine = (line, player) => {
  const playerValues = [...player].sort();
  let matched = 0;
  for (const value of line) {
    playerValues.includes(value) && matched++;
  }
  // console.log(matched, "matched");
  if (matched === 3) {
    return { result: true, line: line };
  } else {
    return { result: false };
  }
};

const isWinner = (player) => {
  // console.log(playerValues, "player values");

  return gameValues.possibleOutcome.some((item) => {
    const isMatched = isThisWinnerLine(item, player);

    if (isMatched.result) {
      return true;
    }
  });
};

const decideWinner = (isPlayer) => {
  const { player, AI, emptyBoxes } = gameValues;

  console.log(isPlayer, "isPlayer");

  if (isPlayer && player.length > 2) {
    console.log("player with length > 2");
    // console.log(isWinner(player), "is winner");
    if (isWinner(player)) {
      gameValues.isWinner = true;

      const line = sketchLineDraw(player);

      setTimeout(() => {
        updateDomAfterWin(line);
        winSound();
      }, 1500);

      return true;
    }
  }

  if (!isPlayer && AI.length > 2) {
    console.log("AI with length > 2");
    console.log(isWinner(AI), "is winner");
    if (isWinner(AI)) {
      gameValues.isWinner = false;
      const line = sketchLineDraw(AI);
      setTimeout(() => {
        updateDomAfterWin(line);
        loseSound();
      }, 1500);
      return true;
    }
  }

  if (!emptyBoxes.length) {
    console.log("checking draw");
    updateDomAfterWin();
    tieSound();
    return true;
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

  console.log(value, "value");
  const targetElm = gameBoardContainer.querySelector(`div:nth-child(${value})`);

  playerSymbolAudioEffect(gameValues.AISymbol);
  targetElm.textContent = AISymbol;

  const boxNumber = +targetElm.dataset.box;
  gameValues.AI.push(boxNumber);

  removeFromEmptySlots(boxNumber);

  if (gameValues.AI.length > 2 && decideWinner(false)) return;

  decideOfDisableDiv(true, targetElm);
  decideOfDisableDiv(false, gameBoardContainer);
  //   console.log(targetElm);

  gameValues.turn = true;
  setActiveBorder();
};

const removeFromEmptySlots = (slot) => {
  //   find the box into the empty box array
  const emptyBoxIndex = gameValues.emptyBoxes.findIndex(
    (value) => value == slot
  );

  console.log(slot, "remove value");
  console.log(emptyBoxIndex, "remove index");

  // remove the selected box number
  console.log(gameValues.emptyBoxes, "Player before");
  gameValues.emptyBoxes.splice(emptyBoxIndex, 1);
  console.log(gameValues.emptyBoxes, "Player after");
};

const playerSymbolAudioEffect = (symbol) => {
  symbol.toLowerCase() === "o" ? circleSound() : crossSound();
};

const play = () => {
  gameBoardContainer.addEventListener("click", (e) => {
    const isDisabled = e.target.textContent;

    if (!isDisabled) {
      const parentElm = e.currentTarget;
      const targetElm = e.target;
      const boxNumber = targetElm.dataset.box;

      playerSymbolAudioEffect(gameValues.playerSymbol);
      targetElm.textContent = gameValues.playerSymbol;

      gameValues.player.push(+boxNumber);

      removeFromEmptySlots(boxNumber);

      console.log(
        gameValues.player.length > 2 && decideWinner(true),
        "decide winner player"
      );
      if (gameValues.player.length > 2 && decideWinner(true)) {
        return;
      } else {
        console.log(gameValues.emptyBoxes, "Player After");

        gameValues.turn = false;

        decideOfDisableDiv(true, parentElm);
        decideOfDisableDiv(true, targetElm);
        setActiveBorder();
        autoPlay();
      }
    }
  });
};

export { play };
