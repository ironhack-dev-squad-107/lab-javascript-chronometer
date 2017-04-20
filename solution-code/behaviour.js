function Chronometer () {
  this.intervalId;
  this.currentTime = 0;
}

// Button click events
Chronometer.prototype.startClick = function () {
  this.setStopBtn();
  this.setSplitBtn();

  this.start();
};

Chronometer.prototype.stopClick = function () {
  this.setStartBtn();
  this.setResetBtn();

  this.stop();
};

Chronometer.prototype.resetClick = function () {
  this.reset();
};

Chronometer.prototype.splitClick = function () {
  console.log("Split click");
};

// Visual Behaviour Functions
Chronometer.prototype.setStopBtn = function () {
  btnLeft.innerHTML = "STOP"; btnLeft.className = "btn stop";
};

Chronometer.prototype.setStartBtn = function () {
  btnLeft.innerHTML = "START"; btnLeft.className = "btn start";
};

Chronometer.prototype.setSplitBtn = function () {
  btnRight.innerHTML = "SPLIT"; btnRight.className = "btn split";
};

Chronometer.prototype.setResetBtn = function () {
  btnRight.innerHTML = "RESET"; btnRight.className = "btn reset";
};

// Behaviour Functions
Chronometer.prototype.start = function () {
  var that = this;
  this.intervalId = setInterval(function () {
    that.currentTime += 1;
    that.printTime();
  }, 1000);
};

Chronometer.prototype.stop = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.reset = function () {
  this.currentTime = 0;
  this.printTime();
}

Chronometer.prototype.printTime = function () {
  var minDec = document.getElementById("minDec");
  var minUni = document.getElementById("minUni");
  var secDec = document.getElementById("secDec");
  var secUni = document.getElementById("secUni");

  var minutes = Math.floor(this.currentTime / 60);
  var seconds = this.currentTime - (minutes * 60);

  if (minutes > 0) {
    var mins = ("0" + minutes).slice(-2);
    minDec.innerHTML = mins[0];
    minUni.innerHTML = mins[1];
  }

  var secs = ("0" + seconds).slice(-2);
  secDec.innerHTML = secs[0];
  secUni.innerHTML = secs[1];
}
