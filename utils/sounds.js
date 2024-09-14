const setAudio = (src) => {
  const audio = new Audio();
  audio.src = src;
  audio.play();
};

const clickSound = () => {
  setAudio("assets/audio/click.mp3");
};

const clapSound = () => {
  setAudio("assets/audio/clap.mp3");
};

const errorSound = () => {
  setAudio("assets/audio/error.mp3");
};
