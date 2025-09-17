export const playSound = (src = "/sounds/done.mp3") => {
  const audio = new Audio(src);
  audio.play().catch((err) => {
    console.error("Sound play failed:", err);
  });
};
