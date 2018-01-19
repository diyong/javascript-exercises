var repeatString = function(string, numberOfRepeats) {

	let repeatedString = "";
	let i = 0;

	if (numberOfRepeats >= 0) {
		while (i < numberOfRepeats) {
			repeatedString += string;
			i++;
		}

		return repeatedString;
	} else {
		return "ERROR";
	}
	
}

module.exports = repeatString
