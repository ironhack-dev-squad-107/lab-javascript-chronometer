// Initialize
var utils       = new Utils();
var chronometer = new Chronometer(utils);
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
