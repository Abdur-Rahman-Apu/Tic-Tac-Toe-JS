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
import { gameValues } from "../variables.js";
import setActiveBorder from "./activeBorder.js";
import { autoPlay } from "./play.js";

const editPart = () => {
  nameField.addEventListener("keyup", (e) => {
    const value = e.target.value;
    console.log(value, "Value");
    gameValues.name = value.trim();
  });

  gameModeName.addEventListener("click", () => {
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
      gameModeName.textContent = e.target.textContent;
      gameValues.mode = e.target.textContent;
      modesContainer.style.height = 0;
      modesContainer.style.display = "none";
      gameValues.isModesOpen = false;
    }
  });

  editModeBtn.addEventListener("click", () => {
    if (!gameValues.name) {
      alert("Please enter valid name");
    } else {
      if (gameValues.mode === "Medium") {
        gameValues["aiMode"] = 2;
      }
      editContainer.style.display = "none";
      gamePartContainer.style.display = "flex";
      finalModeName.textContent = gameValues.mode;
      playerName.textContent = `${gameValues.name}(${
        gameValues.tossWon ? "O" : "X"
      })`;
      systemName.textContent += `(${gameValues.tossWon ? "X" : "O"})`;
      setActiveBorder();
      !gameValues.isTossWon && autoPlay();
    }
  });
};

export { editPart };
