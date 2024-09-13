import { gameValues } from "../../variables.js";

const easyMode = () => {
  const { emptyBoxes } = gameValues;
  console.log(emptyBoxes, "AI before easy mode");
  const boxIndex = Math.floor(Math.random() * emptyBoxes.length);
  const boxNumber = emptyBoxes[boxIndex];
  // gameValues.emptyBoxes.splice(boxIndex, 1);
  // console.log(emptyBoxes, boxIndex, "AI after");
  console.log(boxNumber, "easy mode");
  return boxNumber;
};

export default easyMode;
