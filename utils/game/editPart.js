import {
  editContainer,
  editModeBtn,
  gameModeName,
  gamePartContainer,
  modesContainer,
  nameField,
} from "../elements.js";
import gameValues from "../variables.js";

const editPart = () => {
  nameField.addEventListener("keyup", (e) => {
    const value = e.target.value;
    console.log(value, "Value");
    gameValues.name = value.trim();
  });

  gameModeName.addEventListener("click", () => {
    if (gameValues.isModesOpen) {
      modesContainer.style.height = 0;
      modesContainer.style.display = "none";
      gameValues.isModesOpen = false;
    } else {
      modesContainer.style.height = "auto";
      modesContainer.style.display = "block";
      gameValues.isModesOpen = true;
    }
  });

  modesContainer.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    gameModeName.textContent = e.target.textContent;
    gameValues.mode = e.target.textContent;
    modesContainer.style.height = 0;
    modesContainer.style.display = "none";
    gameValues.isModesOpen = false;
  });

  editModeBtn.addEventListener("click", () => {
    if (!gameValues.name) {
      alert("Please enter valid name");
    } else {
      editContainer.style.display = "none";
      gamePartContainer.style.display = "flex";
    }
  });
};

export { editPart };
