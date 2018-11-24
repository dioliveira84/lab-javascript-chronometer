// Constructor

function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var that = this;
  this.intervalId = setInterval(function () {
    that.currentTime += 1;
    that.setTime()
  }, 1000)
};

Chronometer.prototype.setMinutes = function () {
  var minutes = this.currentTime / 60
  return parseInt(minutes, 10)
};

Chronometer.prototype.setSeconds = function () {
  var seconds = this.currentTime % 60
  return seconds 
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  if (number < 10){
    return "0" + number
  } 
  return number.toString()
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes())
  this.seconds = this.twoDigitsNumber(this.setSeconds())
  printTime()
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  this.intervalId = clearInterval()
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0
};

Chronometer.prototype.splitClick = function () {

};