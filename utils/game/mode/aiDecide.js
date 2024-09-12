import { gameValues } from "../../variables.js";
import easyMode from "./easy.js";

const findMissedElements = (singlePossibleOutcome) => {
  const { possibleOutcome, player, AI, emptyBoxes } = gameValues;

  let missedElements;

  singlePossibleOutcome.forEach((item) => {
    missedElements = item.filter((val) => !player.includes(val));
  });

  return missedElements;
};

const getCrucialValue = () => {
  const { emptyBoxes } = gameValues;
  const needToPlace = [1, 3, 7, 9];

  const crucialValue = needToPlace.find((value) => emptyBoxes.includes(value));

  if (!crucialValue) {
    return easyMode();
  }

  return crucialValue;
};

const aiDecide = () => {
  const { possibleOutcome, player, AI } = gameValues;

  if (AI.length < 2 && player.length < 2) {
    return getCrucialValue();
  }

  player.sort((a, b) => a - b);

  for (const item of possibleOutcome) {
    const missedElements = findMissedElements(item);
    if (missedElements && missedElements.length) {
      return missedElements[0];
    }
  }

  return getCrucialValue();
};

export default aiDecide;
