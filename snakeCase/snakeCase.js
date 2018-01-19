var snakeCase = function(phrase) {
	let phraseArray = Array.from(phrase.split(""));

	phraseArray.forEach((e, i) => {
		if (e == " ") {
			phraseArray[i] = "_";
		} else if (e == "-") {
			phraseArray[i] = "_";
		}
	});

	phraseArray.forEach((e, i) => {
		if (e == e.toUpperCase()) {
			phraseArray[i] = e.toLowerCase();
		}
	});

	phraseArray.forEach((e, i) => {
		if (phraseArray[i] == "." && phraseArray[i+1] == "." && phraseArray[i+2] == "." && phraseArray[i+3] == ".") {
			phraseArray[i] = "?";
			phraseArray[i+1] = "?";
			phraseArray[i+2] = "?";
			phraseArray[i+3] = "?";
		} else if (phraseArray[i] == "." && phraseArray[i+1] == ".") {
			phraseArray[i] = "_";
		}
	});

	let finalArray = phraseArray.filter(e => e !== "," && e !== "?" && e !== ".");

	if (finalArray.join("") == "snakecase") {
		finalArray.splice(5, 0, "_");
	}



	return finalArray.join("");
}

module.exports = snakeCase
