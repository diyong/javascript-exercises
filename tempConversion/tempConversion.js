var ftoc = function() {
  let fTemp = Number(arguments[0]);

  let fConversion = (fTemp - 32) * (5 / 9);

  if (Number.isInteger(fConversion) !== true) {
  	return +fConversion.toFixed(1);
  } else {
  	return fConversion;
  }

}

var ctof = function() {
  let cTemp = Number(arguments[0]);

  let cConversion = (cTemp * (9 / 5)) + 32;

  if (Number.isInteger(cConversion) !== true) {
  	return +cConversion.toFixed(1);
  } else {
  	return cConversion;
  }
}

module.exports = {
  ftoc,
  ctof
}
