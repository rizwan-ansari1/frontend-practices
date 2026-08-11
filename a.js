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
  }, 1);

  startBtn.disabled = true;
  stopBtn.disabled = false;
  taskInput.disabled = true;
}
startBtn.addEventListener("click", startTimer);

function stopTimer() {
  clearInterval(timeInterval);

  const taskName = taskInput.value.trim();

  const session = {
    id: sessions.length + 1,
    task: taskName,
    duration: seconds,
    date: new Date(),
  };

  sessions.push(session);
  taskSet.add(taskName);

  const currentCount = taskMap.get(taskName) || 0;
  taskMap.set(taskName, currentCount + 1);

  renderSession();
  updateStates();
  showRandomQuote();

  seconds = 0;
  timerDisplay.textContent = formatTime(seconds);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  taskInput.disabled = false;
}
stopBtn.addEventListener("click", stopTimer);

const sessionListEl = document.getElementById("sessionList");

function renderSession() {
  sessionListEl.innerHTML = "";
  sessions.forEach(function (session) {
    const li = document.createElement("li");
    const timeString = session.date.toLocaleTimeString();
    li.textContent = `#${session.id}-${session.task}-${formatTime(session.duration)}-${timeString}`;
    sessionListEl.appendChild(li);
  });
}

const totalSessionsEl = document.getElementById("totalSessions");
const uniqueTaskEl = document.getElementById("uniqueTasks");
const avgDurationEl = document.getElementById("avgDuration");

function updateStates() {
  totalSessionsEl.textContent = sessions.length;
  uniqueTaskEl.textContent = taskSet.size;

  let totalDuration = 0;
  for (const session of sessions) {
    totalDuration = totalDuration + session.duration;
  }
  const average =
    sessions.length > 0 ? Math.round(totalDuration / sessions.length) : 0;
  avgDurationEl.textContent = average + "s";

  console.log("avg duration:", average);
}

const quoteEl = document.getElementById("quote");
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomIndex];
}
