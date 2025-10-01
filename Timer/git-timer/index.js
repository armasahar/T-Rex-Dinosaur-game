const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButtton = document.querySelector("#pause");
pauseButtton.disabled = true;
const resetButton = document.querySelector("#reset");
resetButton.disabled = true;
const circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);
let duration;
let timePassed = 0;

const callbacks = {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemainig) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemainig) / duration - perimeter
    );
  },
  onComplete() {
    console.log("complete");
  },
  onPause() {
    console.log("onPause");
  },
  onContinue() {
    console.log("onContinue");
  },
};

new Timer(
  durationInput,
  startButton,
  pauseButtton,
  resetButton,
  callbacks,
  timePassed
);