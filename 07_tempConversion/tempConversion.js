const ftoc = function(tempF) {
 let celsius = ((tempF - 32) * (5/9)).toFixed(1);
 if(celsius == 0.0) {
  celsius = 0;
 }
 return celsius ;
};

const ctof = function(tempC) {
  let far = ((tempC * (5/9)) + 32).toFixed(1);
  if(far == 0.0) {
    far = 0
  }
  return far;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
