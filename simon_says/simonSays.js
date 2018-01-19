function echo(word) {
	let echoWord = word;
	return echoWord;
}

function shout(words) {
	let shoutWord = words.toUpperCase();
	return shoutWord;
}

function repeat(words, num) {
	let repeatWords = "";
	if (num == undefined) {
		return repeatWords = words + " " + words;
	} else {
		for (let i = 0; i < num; i++) {
			repeatWords += words + " ";
		}
		return repeatWords.slice(0, -1);
		
	}

}

function pieceOfWord(words, num) {
	return words.slice(0, num);
}

function firstWord(string) {
	let arrayString = Array.from(string.split(" "));
	return arrayString[0];
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

let arrayString = [];

function titleCreator(word) {
	let newTitle = "";
	arrayString = Array.from(word.split(" "));

	for (let i = 0; i < arrayString.length; i++) {
		if ((arrayString[i] == "the" || arrayString[i] == "and" || arrayString[i] == "over") && i !== 0) {
			newTitle += arrayString[i] + " ";
		} else {
			newTitle += capitalize(arrayString[i]) + " ";
		}
	}

	return newTitle.slice(0, -1);
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}