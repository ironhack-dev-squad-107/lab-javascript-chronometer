function Chronometer () { }

// Button click events
Chronometer.prototype.startClick = function () {
  this.setStop();
  this.setSplit();
};

Chronometer.prototype.stopClick = function () {
  this.setStart();
  this.setReset();
};

Chronometer.prototype.resetClick = function () {
  console.log("Reset click");
};

Chronometer.prototype.splitClick = function () {
  console.log("Split click");
};

// Behaviour Functions
Chronometer.prototype.setStop = function () {
  btnLeft.innerHTML = "STOP"; btnLeft.className = "btn stop";
};

Chronometer.prototype.setStart = function () {
  btnLeft.innerHTML = "START"; btnLeft.className = "btn start";
};

Chronometer.prototype.setSplit = function () {
  btnRight.innerHTML = "SPLIT"; btnRight.className = "btn split";
};

Chronometer.prototype.setReset = function () {
  btnRight.innerHTML = "RESET"; btnRight.className = "btn reset";
};
