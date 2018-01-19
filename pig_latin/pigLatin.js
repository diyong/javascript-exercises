function translate(phrase) {
	let phraseArray = Array.from(phrase.split(" "));

	phraseArray.forEach((e, i) => {
		if (e.charAt(0).match(/[aeiou]/i)) {
			phraseArray[i] = e.concat("ay");
		} else if (e.charAt(0).match(/[^aeiou]/i)) {
			phraseArray[i] = consonantCheck(e);
		}
	});

	function consonantCheck(e) {
		let moved = e;
		for (i = 0; i < e.length; i++) {
			if (moved.match(/^qu/)) {
				moved = moved.slice(2) + moved.slice(0, 2);
				break;
			} else if (e.charAt(i).match(/[^aeiou]/i)) {
				moved = moved.slice(1) + moved.slice(0, 1);
			} else {
				break;
			}
		}
		return moved + "ay";
	}

	return phraseArray.join(" ");
}


module.exports = {
	translate
}

