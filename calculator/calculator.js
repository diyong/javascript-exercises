function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

// You do not have to do an iteration for loop when you can use a reduce() method
function sum (arrayList) {
	return arrayList.reduce((total, arrayList) => {
		if (arrayList.length == 0) {
			return 0;
		} else {
			return total + arrayList;
		}
	}, 0);
}

function multiply (arrayList) {
	return arrayList.reduce((total, arrayList) => {
		return total * arrayList;
	});
}

function power(a, b) {
	let total = 1;
	for (let i = 0; i < b; i++){
		total *= a;
	}
	return total;
}

function factorial(num) {
	if (num == 0) {
		return 1;
	} else {
		let total = 1;
		for (let i = 1; i <= num; i++) {
			total *= i;
		}
		return total;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}