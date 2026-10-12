const STORAGE_KEY = "soundMuted";

let muted = false;
try {
  muted = localStorage.getItem(STORAGE_KEY) === "true";
} catch {
  // localStorage not available, keep sound on
}

export const isMuted = () => muted;

export const toggleMute = () => {
  muted = !muted;
  try {
    localStorage.setItem(STORAGE_KEY, String(muted));
  } catch {
    // ignore storage errors
  }
  return muted;
};

export const playSound = (src) => {
  if (muted) return;
  const audio = new Audio(src);
  audio.play().catch((err) => {
    console.error("Sound play failed:", err);
  });
};
