// Motivation button logic
let motivationCount = 0;
const motivationBtn = document.getElementById("motivation-btn");
const motivationCounter = document.getElementById("motivation-counter");
const clickSound = document.getElementById("click-sound");

motivationBtn.addEventListener("click", () => {
  motivationCount++;
  motivationCounter.textContent = `Motivation: ${motivationCount}`;

  // Play the sound
  clickSound.currentTime = 0; // rewind to start so it plays every click
  clickSound.play();
});
