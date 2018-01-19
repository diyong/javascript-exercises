var fibonacci = function(num) {
	let fibArray = [1, 1];

	if (num < 1) {
		return "OOPS";
	} else if (num >= 2){
		for (let i = 2; i < num; i++) {
			fibArray[i] = fibArray[i-2] + fibArray[i-1];
		}
		return fibArray[num-1];
	}
}

module.exports = fibonacci
