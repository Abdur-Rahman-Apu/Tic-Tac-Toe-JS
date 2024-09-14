const startPointContainer = document.querySelector(".start-point");
const startBtn = document.querySelector(".start-btn");

const headBtn = document.querySelector(".head-btn");
const tailBtn = document.querySelector(".tail-btn");

const tossContainer = document.querySelector(".toss-part");
const coinInner = document.querySelector(".coin-inner");
const coinFront = document.querySelector(".coin-front-side");
const coinBack = document.querySelector(".coin-back-side");

const editContainer = document.querySelector(".edit-part");
const tossResultInfo = document.querySelector(".toss-result");
const nameField = document.querySelector("#name");
const gameModeName = document.querySelector(".game-mode-name");
const modesContainer = document.querySelector(".modes");
const editModeBtn = document.querySelector(".edit-mode-btn");

const gamePartContainer = document.querySelector(".game-part");
const finalModeName = document.querySelector(".final-mode-name");
const player = document.querySelector(".player");
const system = document.querySelector(".system");
const playerImgContainer = document.querySelector(".player-img");
const systemImgContainer = document.querySelector(".system-img");
const playerName = document.querySelector(".player .player-name");
const systemName = document.querySelector(".system-name");

const gameBoardContainer = document.querySelector(".game-board-container");
const sketchLine = document.querySelector(".game-board-container:before");

const winnerPartContainer = document.querySelector(".winner-part");
const winningMsg = document.querySelector(".winning-msg .win-msg");
const winningImg = document.querySelector(".winning-msg img");
const playAgainBtn = document.querySelector(".play-again-btn");
const exitBtn = document.querySelector(".exit-btn");

export {
  coinBack,
  coinFront,
  coinInner,
  editContainer,
  editModeBtn,
  exitBtn,
  finalModeName,
  gameBoardContainer,
  gameModeName,
  gamePartContainer,
  headBtn,
  modesContainer,
  nameField,
  playAgainBtn,
  player,
  playerImgContainer,
  playerName,
  sketchLine,
  startBtn,
  startPointContainer,
  system,
  systemImgContainer,
  systemName,
  tailBtn,
  tossContainer,
  tossResultInfo,
  winnerPartContainer,
  winningImg,
  winningMsg,
};
