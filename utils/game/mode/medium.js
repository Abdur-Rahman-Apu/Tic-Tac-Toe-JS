import { gameValues } from "../../variables.js";
import aiDecide from "./AiDecide.js";
import easyMode from "./easy.js";

const mediumMode = () => {
  const { player, aiMode } = gameValues;

  if (player.length > 2 && aiMode === 1) {
    globalValues["aiMode"]--;
    return aiDecide();
  }

  return easyMode();
};

export default mediumMode;
