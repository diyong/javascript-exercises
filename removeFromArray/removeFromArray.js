var removeFromArray = function(array) {
	
	let a;

	for (let i = 1; i < arguments.length; i++) {
		a = array.indexOf(arguments[i]);

		/* If an arugment element is not found in the array, the indexOf() method will return
		a -1. This will remove the last item in the array even if the element wasn't found. 
		The if statement below takes that into consideration and only executes the splice if
		element was found within the array. */

		if (a !== -1) {
			array.splice(a, 1);
		}
		
	}

	return array;

}
module.exports = removeFromArray
