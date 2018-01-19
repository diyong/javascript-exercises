var palindromes = function(phrase) {
	let lowerCase = phrase.toLowerCase();
	let arrayList = Array.from(lowerCase.split(""));

	let noSpaceComma = arrayList.filter(spaceComma => (spaceComma !== "," && spaceComma !== " " 
		&& spaceComma !== "." && spaceComma !== "!"));
	let comparison = noSpaceComma.slice();
	let reverseComparison = noSpaceComma.reverse();

	for (let i = 0; i < comparison.length; i++) {
		for (let j = 0; j < reverseComparison.length; j++) {
			if (comparison[i] == reverseComparison[j]) {
				return true;
			} else {
				return false;
			}
		}
	}
}

module.exports = palindromes
