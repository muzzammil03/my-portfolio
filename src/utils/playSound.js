export const playSound = (src) => {
  const audio = new Audio(src);
  audio.play().catch((err) => {
    console.error("Sound play failed:", err);
  });
};
