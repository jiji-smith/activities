var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

function startTimer() {
  // Write code to start the timer here
  totalSeconds = minutesDisplay*60 + secondsDisplay
  while (minutesDisplay > 0 ) {
    secondsDisplay --;
    if (secondsDisplay === "0") {
      minutesDisplay --;
    }
    return;
  }

}

playButton.addEventListener("click", startTimer);
