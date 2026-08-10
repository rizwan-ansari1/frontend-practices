let seconds = 0;
let timeInterval = null;
let sessions = [];
let taskSet = new Set();
let taskMap = new Map();

const quotes = [
  "Small steps every day add up.",
  "Focus is a skill. You're training it right now.",
  "Progress, not perfection.",
  "Future you will thank present you.",
  "One session at a time.",
];

const taskInput = document.getElementById("taskInput");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const timerDisplay = document.getElementById("timerDisplay");

function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  const paddedMins = String(mins).padStart(2, "0");
  const paddedSecs = String(secs).padStart(2, "0");
  return `${paddedMins}:${paddedSecs}`;
}
// timerDisplay.textContent = formatTime(0);

function startTimer() {
  const taskName = taskInput.value.trim();
  if (taskName === "") {
    alert("Type what are you studying first!");
    return;
  }
  seconds = 0;
  timerDisplay.textContent = formatTime(seconds);

  timeInterval = setInterval(function () {
    seconds = seconds + 1;
    timerDisplay.textContent = formatTime(seconds);
  }, 1000);

  startBtn.disabled = true;
  stopBtn.disabled = false;
  taskInput.disabled = true;
}
startBtn.addEventListener("click", startTimer);
