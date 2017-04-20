// Initialize
var chronometer = new Chronometer();
var utils       = new Utils();
var btnLeft     = document.getElementById("btnLeft");
var btnRight    = document.getElementById("btnRight");

// Start/Stop Button
btnLeft.addEventListener("click", function () {
  if (utils.hasClass(btnLeft, "start")) { chronometer.startClick(); }
  else { chronometer.stopClick(); }
});

// Reset/Split Button
btnRight.addEventListener("click", function () {
  if (utils.hasClass(btnRight, "reset")) { chronometer.resetClick(); }
  else { chronometer.splitClick(); }
});
