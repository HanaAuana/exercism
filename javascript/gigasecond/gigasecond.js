var Gigasecond = function(inputDate) {
  //A gigasecond is 1,000,000,000,000 miliseconds
  this.GIGA_IN_MILIS = 1000000000000;
  this.inputDate = inputDate;
};

Gigasecond.prototype.date = function() {
  var newTime = this.inputDate.getTime() + this.GIGA_IN_MILIS;
  var newDate = new Date(newTime);
  newDate.setHours(0);
  newDate.setMinutes(0);
  newDate.setSeconds(0);
  return newDate;
};

module.exports = Gigasecond;
