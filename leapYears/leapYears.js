var leapYears = function() {
	let year = Number(arguments[0]);

	if (year % 100 == 0 && year % 400 !== 0) {
		return false;
	} else if (year % 4 == 0) {
		return  true;
	} else {
		return false;
	}
}

module.exports = leapYears
