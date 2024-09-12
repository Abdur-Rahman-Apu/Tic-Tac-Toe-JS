import { editPart } from "./utils/game/editPart.js";
import endPart from "./utils/game/end.js";
import { play } from "./utils/game/play.js";
import { gameStart } from "./utils/game/startPoint.js";
import { tossPart } from "./utils/game/tossPart.js";

(function () {
  gameStart();
  tossPart();
  editPart();
  play();
  endPart();
})();
