function Utils () {}

// Functions
Utils.prototype.hasClass = function (element, className) {
  return element.className.indexOf(className) > 0;
}
