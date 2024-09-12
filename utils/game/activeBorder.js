import { playerImgContainer, systemImgContainer } from "../elements.js";
import gameValues from "../variables.js";

const setActiveBorder = () => {
  const active = { border: "3px solid #33d9b2" };
  const inActive = { border: "3px solid transparent" };
  if (gameValues.turn) {
    Object.assign(playerImgContainer.style, active);
    Object.assign(systemImgContainer.style, inActive);
  } else {
    Object.assign(systemImgContainer.style, active);
    Object.assign(playerImgContainer.style, inActive);
  }
};

export default setActiveBorder;
