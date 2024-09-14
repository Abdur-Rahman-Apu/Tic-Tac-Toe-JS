import {
  coinBack,
  coinFront,
  coinInner,
  editContainer,
  headBtn,
  tailBtn,
  tossContainer,
  tossResultInfo,
} from "../elements.js";
import { tossSound } from "../sounds.js";
import { gameValues } from "../variables.js";

const decideTossResult = () => {
  return Math.floor(Math.random() * 2);
};

const updateDomAfterTossWon = (coin) => {
  if (gameValues.coin === coin) {
    gameValues.playerSymbol = "O";
    gameValues.AISymbol = "X";
    gameValues.turn = true;
    gameValues.isTossWon = true;
    tossResultInfo.textContent = "You won the toss";
  } else {
    gameValues.playerSymbol = "X";
    gameValues.AISymbol = "O";
    gameValues.turn = false;
    gameValues.isTossWon = false;
    tossResultInfo.textContent = "You lost the toss";
  }
};

const setTossResult = (coin) => {
  coinInner.style.animation = "rotation 1s linear infinite";
  gameValues.coin = coin;
  let tossResult = null;

  //   animating coin
  setTimeout(() => {
    tossResult = decideTossResult();
    coinInner.style.animation = "none";
    console.log(tossResult, gameValues.coin);
    if (tossResult) {
      // tail
      console.log("Tail");
      coinFront.style.transform = "rotateX(180deg)";
      coinBack.style.transform = "none";
      updateDomAfterTossWon("t");
    } else {
      //head
      console.log("head");
      coinBack.style.transform = "rotateX(180deg)";
      coinFront.style.transform = "none";
      updateDomAfterTossWon("h");
    }

    tossContainer.style.display = "none";
    editContainer.style.display = "flex";
  }, 3000);
};

const tossPart = () => {
  headBtn.addEventListener("click", (e) => {
    tossSound();
    tailBtn.style.display = "none";
    e.target.setAttribute("disabled", true);
    e.target.style.cursor = "not-allowed";
    setTossResult("h");
  });

  tailBtn.addEventListener("click", (e) => {
    tossSound();
    headBtn.style.display = "none";
    e.target.setAttribute("disabled", true);
    e.target.style.cursor = "not-allowed";
    setTossResult("t");
  });
};

export { tossPart };
