var caesar = function(string, pos) {
	let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ,
					"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 
					"v", "w", "x", "y", "z"];

	let x = "";

	let arrayString = Array.from(string.split(""));

	arrayString.forEach((e, i) => {
		if (e == "," || e == "!") {
			return true;
		} else if (e.match(/[a-z]/i) && e == e.toUpperCase()) {
			arrayString[i] = e.toLowerCase();
			arrayString[i] = findNew(arrayString[i]).toUpperCase();
		} else if (e.match(/[a-z]/i)) {
			arrayString[i] = findNew(e);
		}
	});

	function findNew(e) {
		let alphaPos = alphabet.indexOf(e);
		if (alphaPos + pos < 0) {
			let remainder = alphabet.length + (alphaPos + pos);
			return alphabet[remainder];
		} else if (alphaPos + pos >= alphabet.length) {
			if (alphaPos + pos >= (alphabet.length * 2)) {
				let remainder = (alphaPos + pos) % alphabet.length;
				return alphabet[remainder];
			}
			let remainder = (alphaPos + pos) - alphabet.length;
			return alphabet[remainder];
		} else {
			return e = alphabet[alphaPos + pos];
		}
	}

	return arrayString.join("");

}

module.exports = caesar
