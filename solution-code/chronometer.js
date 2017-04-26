// Constructor
function Chronometer (utils) {
  this.utils = utils;

  this.intervalId;
  this.millisecondsIntervalId;
  this.currentTime = 0;
  this.currentMilliseconds = 0;
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
  this.split();
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

  this.millisecondsIntervalId = setInterval(function () {
    if (that.currentMilliseconds === 99) { that.currentMilliseconds = 0; }
    that.currentMilliseconds += 1;
    that.printMilliseconds(that.currentMilliseconds);
  }, 10);
};

Chronometer.prototype.stop = function () {
  clearInterval(this.intervalId);
  clearInterval(this.millisecondsIntervalId);
};

Chronometer.prototype.reset = function () {
  this.currentTime = 0;
  this.currentMilliseconds = 0;

  this.printMinutes(0);
  this.printSeconds(0);
  this.printMilliseconds(0);
  this.clearSplits();
};

Chronometer.prototype.split = function () {
  var minutes      = this.getCurrentMinutes();
  var seconds      = this.getCurrentSeconds(minutes);
  var milliseconds = this.currentMilliseconds;
  var split        = this.utils.twoDigitsNumber(minutes) + ":" + this.utils.twoDigitsNumber(seconds) + ":" + this.utils.twoDigitsNumber(milliseconds);

  var li = document.createElement("li");
  li.innerHTML = split;
  document.getElementById("splits").appendChild(li);
};

Chronometer.prototype.printTime = function () {
  var minDec = document.getElementById("minDec");
  var minUni = document.getElementById("minUni");
  var secDec = document.getElementById("secDec");
  var secUni = document.getElementById("secUni");
  var milDec = document.getElementById("milDec");
  var milUni = document.getElementById("milUni");

  var minutes = this.getCurrentMinutes();
  var seconds = this.getCurrentSeconds(minutes);

  if (minutes > 0) { this.printMinutes(minutes); }
  this.printSeconds(seconds);
}

Chronometer.prototype.getCurrentMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.getCurrentSeconds = function (minutes) {
  return this.currentTime - (minutes * 60);
};

Chronometer.prototype.printMinutes = function (minutes) {
  var mins = this.utils.twoDigitsNumber(minutes);

  minDec.innerHTML = mins[0];
  minUni.innerHTML = mins[1];
};

Chronometer.prototype.printSeconds = function (seconds) {
  var secs = this.utils.twoDigitsNumber(seconds);

  secDec.innerHTML = secs[0];
  secUni.innerHTML = secs[1];
};

Chronometer.prototype.printMilliseconds = function (milliseconds) {
  var milli = this.utils.twoDigitsNumber(milliseconds);

  milDec.innerHTML = milli[0];
  milUni.innerHTML = milli[1];
};

Chronometer.prototype.clearSplits = function () {
  document.getElementById("splits").innerHTML = "";
};
