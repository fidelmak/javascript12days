//LEAP YEAR CHALLENGE
function isLeap(year) {
  var leap = 4;
  var divide = year % leap;
  if (divide === 0) {
    if (divide % 100 === 0) {
      if (divide % 400 === 0) {
        return "Leap year.";
      } else {
        return "not Leap year";
      }
    } else {
      return "not Leap year";
    }
  } else {
    return "not Leap year";
  }
}
console.log(isLeap(365));
