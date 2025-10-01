class Timer {
  constructor(
    durationInput,
    startButton,
    pauseButtton,
    resetButton,
    callbacks,
    timePassed
  ) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButtton = pauseButtton;
    this.resetButton = resetButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
      this.onPause = callbacks.onPause;
      this.onContinue = callbacks.onContinue;
    }
    this.timePassed = timePassed;

    this.startButton.addEventListener("click", this.start);
    this.pauseButtton.addEventListener("click", this.pause);
    this.resetButton.addEventListener("click", this.reset);
  }

  start = () => {
    this.resetButton.disabled = false;
    this.pauseButtton.disabled = false;
    if (this.onStart) {
      this.onStart(this.timeRemainig);
    }
    this.tick();
    this.interval = setInterval(this.tick, 20);
    this.startButton.disabled = true;
  };

  pause = () => {
    if (this.pauseButtton.innerHTML === "pause") {
      if (this.onPause) {
        this.onPause();
      }
      this.pauseButtton.innerHTML = "continue";
      clearInterval(this.interval);
      clearInterval(this.seconds);
    } else {
      if (this.onContinue) {
        this.onContinue();
      }
      this.pauseButtton.innerHTML = "pause";
      this.start();
    }
  };

  reset = () => {
    this.resetButton.disabled = true;
    this.pauseButtton.disabled = true;
    clearInterval(this.interval);
    this.timeRemainig = this.timeRemainig + this.timePassed;
    this.timePassed = 0;
    if (this.onTick) {
      this.onTick();
    }
    this.pauseButtton.innerHTML = "pause";
    this.startButton.disabled = false;
  };

  tick = () => {
    if (this.timeRemainig <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
        this.pauseButtton.disabled = true;
        this.pauseButtton.innerHTML = "pause";
      }
    } else {
      this.timeRemainig = this.timeRemainig - 0.02;
      this.seconds = setInterval(
        (this.timePassed = this.timePassed + 0.02),
        1000
      );
      if (this.onTick) {
        this.onTick(this.timeRemainig);
      }
    }
  };

  get timeRemainig() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemainig(time) {
    this.durationInput.value = time.toFixed(2);
  }
}