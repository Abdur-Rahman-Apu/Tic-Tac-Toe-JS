import gameValues from "../../variables.js";

const easyMode = () => {
  const { emptyBoxes } = gameValues;
  console.log(emptyBoxes, "AI before");
  const boxIndex = Math.floor(Math.random() * emptyBoxes.length);
  const boxNumber = emptyBoxes[boxIndex];
  gameValues.emptyBoxes.splice(boxIndex, 1);
  console.log(emptyBoxes, boxIndex, "AI after");
  return boxNumber;
};

export default easyMode;
