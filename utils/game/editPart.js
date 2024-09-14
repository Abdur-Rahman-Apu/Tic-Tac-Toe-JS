import {
  editContainer,
  editModeBtn,
  finalModeName,
  gameModeName,
  gamePartContainer,
  modesContainer,
  nameField,
  playerName,
  systemName,
} from "../elements.js";
import { clickSound, errorSound } from "../sounds.js";
import { gameValues } from "../variables.js";
import setActiveBorder from "./activeBorder.js";
import { autoPlay } from "./play.js";

const editPart = () => {
  nameField.addEventListener("keyup", (e) => {
    clickSound();
    const value = e.target.value;
    console.log(value, "Value");
    gameValues.name = value.trim();
  });

  gameModeName.addEventListener("click", () => {
    clickSound();

    const decreaseHeightStyle = {
      display: "none",
      height: 0,
    };
    const increaseHeightStyle = {
      display: "block",
      height: "auto",
    };

    if (gameValues.isModesOpen) {
      Object.assign(modesContainer.style, decreaseHeightStyle);
      gameValues.isModesOpen = false;
    } else {
      Object.assign(modesContainer.style, increaseHeightStyle);
      gameValues.isModesOpen = true;
    }
  });

  modesContainer.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.tagName === "P") {
      clickSound();
      gameModeName.textContent = e.target.textContent;
      gameValues.mode = e.target.textContent;
      modesContainer.style.height = 0;
      modesContainer.style.display = "none";
      gameValues.isModesOpen = false;
    }
  });

  editModeBtn.addEventListener("click", () => {
    clickSound();
    if (!gameValues.name) {
      errorSound();
      setTimeout(() => {
        alert("Please enter valid name");
      }, 1000);
    } else {
      if (gameValues.mode === "Medium") {
        gameValues["aiMode"] = 2;
      }
      editContainer.style.display = "none";
      gamePartContainer.style.display = "flex";
      finalModeName.textContent = gameValues.mode;
      console.log(gameValues.isTossWon, "tosswon");
      playerName.textContent = `${gameValues.name}(${
        gameValues.isTossWon ? "O" : "X"
      })`;
      systemName.textContent = `AI(${gameValues.isTossWon ? "X" : "O"})`;
      setActiveBorder();
      !gameValues.isTossWon && autoPlay();
    }
  });
};

export { editPart };
