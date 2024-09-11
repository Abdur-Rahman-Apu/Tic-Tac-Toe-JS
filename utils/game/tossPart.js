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
import gameValues from "../variables.js";

const decideTossResult = () => {
  return Math.floor(Math.random() * 2);
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
      gameValues.coin === "t" && (gameValues.isTossWon = true);

      gameValues.coin === "t"
        ? (tossResultInfo.textContent = "You won the toss")
        : (tossResultInfo.textContent = "You lost the toss");
    } else {
      //head
      console.log("head");
      coinBack.style.transform = "rotateX(180deg)";
      coinFront.style.transform = "none";
      gameValues.coin === "h" && (gameValues.isTossWon = true);

      gameValues.coin === "h"
        ? (tossResultInfo.textContent = "You won the toss")
        : (tossResultInfo.textContent = "You lost the toss");
    }

    tossContainer.style.display = "none";
    editContainer.style.display = "flex";
  }, 3000);
};

const tossPart = () => {
  headBtn.addEventListener("click", () => {
    setTossResult("h");
  });

  tailBtn.addEventListener("click", () => {
    setTossResult("t");
  });
};

export { tossPart };
