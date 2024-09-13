import { gameValues } from "../../variables.js";
import easyMode from "./easy.js";

const findEmptySlot = (isPlayer) => {
  const { emptyBoxes, possibleOutcome, player, AI } = gameValues;

  //  [
  //    [1, 2, 3],
  //    [4, 5, 6],
  //    [7, 8, 9],
  //    [1, 4, 7],
  //    [2, 5, 8],
  //    [3, 6, 9],
  //    [1, 5, 9],
  //    [3, 5, 7],
  //  ];
  const values = isPlayer ? player : AI;
  const oppositionValues = isPlayer ? AI : player;

  console.log(values, "values inside find empty slot");

  const missedElements = possibleOutcome.reduce((acc, curr) => {
    const missedItems = curr.filter((item) => !values.includes(item));

    console.log(curr, "current");
    console.log(missedItems, "missed items");

    const isExistInOpposition = missedItems.findIndex((item) =>
      oppositionValues.includes(item)
    );

    console.log(isExistInOpposition, "is exist in opposition");

    isExistInOpposition !== -1 && missedItems.splice(isExistInOpposition, 1);

    console.log(missedItems, "new missed items");

    if (
      missedItems.length &&
      isExistInOpposition === -1 &&
      missedItems.length === 1
    ) {
      acc.push(missedItems);
    }

    console.log(acc, "acc");

    return acc;
  }, []);

  console.log(missedElements, "missedElements");

  const emptySlot = missedElements.find((item) => item.length === 1);

  return emptySlot;
};

const findMissedElements = () => {
  const { player, AI } = gameValues;

  const emptySlotOfAi = findEmptySlot(false);

  console.log(emptySlotOfAi, "empty slot of ai");

  if (emptySlotOfAi) {
    return emptySlotOfAi;
  }

  const emptySlotOfPlayer = findEmptySlot(true);

  console.log(emptySlotOfPlayer, "empty slot of player");

  if (emptySlotOfPlayer) {
    return emptySlotOfPlayer[0];
  }

  // let missedElementsOfPlayer = singlePossibleOutcome.filter(
  //   (val) => !player.includes(val) && emptyBoxes.includes(val)
  // );
  // let missedElementsOfAi = singlePossibleOutcome.filter(
  //   (val) => !AI.includes(val) && emptyBoxes.includes(val)
  // );

  // console.log(player, "player");
  // console.log(AI, "ai");
  // console.log(missedElementsOfAi, "missed elements ai");
  // console.log(missedElementsOfPlayer, "missed elements player");

  // if (missedElementsOfAi.length === 1 && AI.length > 1) {
  //   return missedElementsOfAi[0];
  // }

  // if (missedElementsOfPlayer.length === 1 && player.length > 1) {
  //   return missedElementsOfPlayer[0];
  // }
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

  console.log("ai decide");
  if (AI.length < 2 && player.length < 2) {
    console.log("inside condition of < 2");
    return getCrucialValue();
  }

  console.log(player, "player value ai decide");
  player.sort((a, b) => a - b);

  const missedElements = findMissedElements();
  if (missedElements) {
    console.log(missedElements, "missed elements");
    return missedElements;
  }

  console.log("At the bottom ai decide");

  return getCrucialValue();
};

export default aiDecide;
