const setAudio = (src) => {
  const audio = new Audio();
  audio.src = src;
  audio.play();
};

const clickSound = () => {
  setAudio("assets/audio/click.mp3");
};

const winSound = () => {
  setAudio("assets/audio/win.wav");
};

const loseSound = () => {
  setAudio("assets/audio/lose.wav");
};

const errorSound = () => {
  setAudio("assets/audio/error.mp3");
};

const circleSound = () => {
  setAudio("assets/audio/circle.wav");
};

const crossSound = () => {
  setAudio("assets/audio/cross.mp3");
};

const lineSound = () => {
  setAudio("assets/audio/error.mp3");
};

const tossSound = () => {
  setAudio("assets/audio/toss.mp3");
};

export {
  circleSound,
  clickSound,
  crossSound,
  errorSound,
  lineSound,
  loseSound,
  tossSound,
  winSound,
};
