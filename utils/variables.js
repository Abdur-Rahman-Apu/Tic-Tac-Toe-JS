const gameValues = {
  startPage: false,
  tossPage: false,
  coin: null,
  name: "Player 1",
  mode: "Easy",
  isModesOpen: false,
  turn: true,
  playerSymbol: "O",
  AISymbol: "X",
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
};

export default gameValues;
