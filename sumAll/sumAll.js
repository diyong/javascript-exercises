var sumAll = function() {
	let firstNum = Number(arguments[0]);
	let secondNum = Number(arguments[1]);

	let sum;


	if (firstNum < 0 || secondNum < 0) {
		return "ERROR";

	} else if (typeof arguments[0] !== "number" || typeof arguments[1] !== "number") {
		return "ERROR";

	} else if (firstNum < secondNum) {
		sum = firstNum;

		for (firstNum; firstNum < secondNum; firstNum++) {
			if (secondNum == firstNum + 1) {
				sum = sum + secondNum;
			} else {
				sum = sum + (firstNum + 1);
			}
		}

		return sum;

	} else if (secondNum < firstNum) {
		sum = secondNum;

		for (secondNum; secondNum < firstNum; secondNum++) {
			if (firstNum == secondNum + 1) {
				sum = sum + firstNum;
			} else {
				sum = sum + (secondNum + 1);
			}
		}

		return sum;
	}
	
}

module.exports = sumAll
