import { gameValues } from "../../variables.js";
import aiDecide from "./aiDecide.js";
import easyMode from "./easy.js";

const mediumMode = () => {
  const { player, aiMode } = gameValues;

  console.log(player.length, "player length");
  console.log(aiMode, "aiMode");
  console.log(player.length > 0 && aiMode !== 0, "medium check");
  if (player.length > 0 && aiMode !== 0) {
    console.log("ai decide");
    gameValues.aiMode--;
    return aiDecide();
  }

  return easyMode();
};

export default mediumMode;
