var reverseString = function(string) {
	let splitString = string.split("");

	splitString.reverse();
	return splitString.join("");

}

module.exports = reverseString