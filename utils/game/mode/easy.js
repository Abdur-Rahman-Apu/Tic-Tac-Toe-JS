import gameValues from "../../variables.js";

const easyMode = () => {
  const { emptyBoxes } = gameValues;
  const boxIndex = Math.floor(Math.random() * emptyBoxes.length + 1);
  const boxNumber = emptyBoxes[boxIndex];
};

export { easyMode };
