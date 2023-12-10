let timer;
let timeLeft;
let isPaused = false;

let bg = document.querySelector("body");

function startTimer(minutes) {
    if (timer) {
        clearInterval(timer);
    }

    timeLeft = minutes * 60;
    updateTimerDisplay();

    timer = setInterval(function() {
        if (!isPaused) {
            timeLeft--;
            updateTimerDisplay();

            if (timeLeft <= 0) {
                clearInterval(timer);
                alert('Time is up!');
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function pauseTimer() {
    isPaused = !isPaused;
    const pauseButton = document.getElementById('pauseButton');
    pauseButton.innerText = isPaused ? 'Resume' : 'Pause';
}
