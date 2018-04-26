  // Hangman object
	var hangmanGame = {

	// Object of all words that can be chosen, along with info such as their picture and a song clip.
	wordsToPick: {
		Hawkins: {
			picture: 'image-01.jpg',
			song: 'track-02',
			preview: 'assets/audio/track-02'
		},
		Indiana: {
			picture: 'image-02.jpg',
			song: 'track-03',
			preview: 'assets/audio/track-03'
		},
		Eleven: {
			picture: 'image-03.jpg',
			song: 'track-04',
			preview: 'assets/audio/track-04'
		},
		Demogorgon: {
			picture: 'image-04.jpg',
			song: 'track-05',
			preview: 'assets/audio/track-05'
		},
		Dartanion: {
			picture: 'image-05.jpg',
			song: 'track-06',
			preview: 'assets/audio/track-06'
		},
		'The Upside Down': {
			picture: 'image-06.jpg',
			song: 'track-07',
			preview: 'assets/audio/track-07'
		},
		'Mike Wheeler': {
			picture: 'image-07.jpg',
			song: 'track-08',
			preview: 'assets/audio/track-08'
		},
		'Will Byers': {
			picture: 'image-08.jpg',
			song: 'track-09',
			preview: 'assets/audio/track-09'
		},
		'Jim Hopper': {
			picture: 'image-09.jpg',
			song: 'track-10',
			preview: 'assets/audio/track-10'
		},
	},

//Initial declaration of variables
wordInPlay: null,
lettersOfTheWord: [],
matchedLetters: [],
guessedLetters: [],
guessesLeft: 0,
totalGuesses: 0,
letterGuessed: null,
wins: 0,

//Setting onkey function
document.onkeyup = function() {
	var userguess = String.fromCharCode(event.keyCode).
		toLowerCase();

	console.log(userguess);
}

console.log(randomWord);

//Choose random solution word
function chooseWord () {
	var randomWord = words[Math.floor(Math.random()*words.length)];
}

//Adding empty spots for letters to solution words
function blanksFromAnswer (answerWord) {
	var result = "_";
	for(i = 0; i < randomWord.length; i++) {
		text += result;
	}
	return result;
}

//Capturing guessed letters
function alterAt (n,c,result) {
	return(result.substr(0, n) + c + result.substr(n + 1));
}

function guessLetter (letter, shown, answer) {
	var checkLetter = -1;
	checkLetter = answer.indexOf(letter);
	while (checkLetter >= 0) {
		shown = alterAt(checkLetter,letter,shown);
		checkLetter = answer.indexOf(letter,checkLetter +1);
	}
	return shown;
	document.body.innerHTML = guessLetter(letter, shown, answer);
}

//Adding innerHTML to divs
var html = '<p>PRESS ANY KEY TO GET<br>STARTED!<br></p>' +
'<p><br>WINS<br>' + wins + '</p>' + '<p><br>CURRENT WORD<br>' + randomWord + '</P>' + '<p><br>NUMBER OF GUESSES REMAINING<br>' +
remGuesses + '</p>' + '<p><br>LETTERS ALREADY GUESSED<br>' + guessed + '</p>';

document.querySelector('#game-box-two').innerHTML = html;

};
