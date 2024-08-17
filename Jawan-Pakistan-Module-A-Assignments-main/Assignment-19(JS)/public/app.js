var countdownInterval;
var countdownDisplay = document.getElementById("countdownDisplay");

var stopwatchInterval;
var stopwatchDisplay = document.getElementById("stopwatchDisplay");
var stopwatchRunning = false;

function startCountdown() {
    clearInterval(countdownInterval);

    var hours = parseInt(document.getElementById("hours").value) || 0;
    var minutes = parseInt(document.getElementById("minutes").value) || 0;
    var seconds = parseInt(document.getElementById("seconds").value) || 0;

    var totalTime = (hours * 3600) + (minutes * 60) + seconds;

    countdownInterval = setInterval(function () {
        if (totalTime <= 0) {
            clearInterval(countdownInterval);
        } else {
            var hoursLeft = Math.floor(totalTime / 3600);
            var minutesLeft = Math.floor((totalTime % 3600) / 60);
            var secondsLeft = totalTime % 60;

            countdownDisplay.textContent = `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
            totalTime--;
        }
    }, 1000);
}

var min = 0
var sec = 0
var msec = 0

var dmin = document.getElementById("min")
var dsec = document.getElementById("sec")
var dmsec = document.getElementById("msec")

var running = false
var interval
function timer() {
    
    msec++
    dmsec.innerHTML = msec
    if (msec >= 100) {
        sec++
        dsec.innerHTML = sec
        msec = 0
    } else if (sec >= 60) {
        min++
        dmin.innerHTML = min
        sec = 0
    }
}
function startStopwatch() {
    if(!running){
    interval = setInterval(timer, 10)
    running = true
    
}
}
function StopStopwatch() {
    
    clearInterval(interval)
    running = false
}
function resetStopwatch() {
    min = 0
    sec = 0
    msec = 0
    dmin.innerHTML = min
    dsec.innerHTML = sec
    dmsec.innerHTML = msec
    StopStopwatch()
}