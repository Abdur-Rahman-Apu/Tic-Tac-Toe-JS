import deepCopy from "./deepCopy.js";

const initialValues = {
  coin: null,
  isTossWon: false,
  name: "Player 1",
  mode: "Easy",
  isModesOpen: false,
  turn: null,
  playerSymbol: "",
  AISymbol: "",
  emptyBoxes: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  possibleOutcome: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ],
  player: [],
  AI: [],
  isWinner: null,
  aiMode: 2,
};

const resetValues = {
  emptyBoxes: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  player: [],
  AI: [],
  isWinner: null,
  aiMode: 2,
};

let gameValues = {
  ...deepCopy(initialValues),
};

export { gameValues, initialValues, resetValues };
