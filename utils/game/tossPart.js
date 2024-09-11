import {
  coinBack,
  coinFront,
  coinInner,
  headBtn,
  tailBtn,
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
      gameValues.coin === "t" &&
        tossResult === 1 &&
        (gameValues.isTossWon = true);
    } else {
      //head
      console.log("head");
      coinBack.style.transform = "rotateX(180deg)";
      coinFront.style.transform = "none";
      gameValues.coin === "h" &&
        tossResult === 0 &&
        (gameValues.isTossWon = true);
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
