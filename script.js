let seconds = 0;
let timer = null;

function updateDisplay() {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  document.getElementById('timerDisplay').textContent = `${mins}:${secs}`;
}

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  updateDisplay();
}

function markAsDone() {
  const task = document.getElementById('taskInput').value.trim();
  if (!task) {
    alert("Please enter a task before marking as done.");
    return;
  }
  document.getElementById('status').textContent = `✅ "${task}" completed!`;
  pauseTimer();
}
