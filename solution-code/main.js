// Initialize
var chronometer = new Chronometer();
var btnLeft     = document.getElementById("btnLeft");
var btnRight    = document.getElementById("btnRight");

// Start/Stop Button
btnLeft.addEventListener("click", function () {
  if (hasClass(btnLeft, "start")) { chronometer.startClick(); }
  else { chronometer.stopClick(); }
});

// Reset/Split Button
btnRight.addEventListener("click", function () {
  if (hasClass(btnRight, "reset")) { chronometer.resetClick(); }
  else { chronometer.splitClick(); }
});
