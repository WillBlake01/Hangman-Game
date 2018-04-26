// Hangman object
var hangmanGame = {

	// Object of all words that can be chosen, along with info such as their picture and a song clip.
	wordsToPick: {
		hawkins: {
			picture: 'image-01.jpg',
			song: 'track-02',
			preview: 'assets/audio/track-02.wav'
		},
		indiana: {
			picture: 'image-02.jpg',
			song: 'track-03',
			preview: 'assets/audio/track-03.wav'
		},
		eleven: {
			picture: 'image-03.jpg',
			song: 'track-04',
			preview: 'assets/audio/track-04.wav'
		},
		demogorgon: {
			picture: 'image-04.jpg',
			song: 'track-05',
			preview: 'assets/audio/track-05.wav'
		},
		dartanion: {
			picture: 'image-05.jpg',
			song: 'track-06',
			preview: 'assets/audio/track-06.wav'
		},
		'the upside down': {
			picture: 'image-06.jpg',
			song: 'track-07',
			preview: 'assets/audio/track-07.wav'
		},
		'mike wheeler': {
			picture: 'image-07.jpg',
			song: 'track-08',
			preview: 'assets/audio/track-08.wav'
		},
		'will byers': {
			picture: 'image-08.jpg',
			song: 'track-09',
			preview: 'assets/audio/track-09.wav'
		},
		'jim hopper': {
			picture: 'image-09.jpg',
			song: 'track-10',
			preview: 'assets/audio/track-10.wav'
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

	setupGame: function() {
		var objKeys = Object.keys(this.wordsToPick);
		this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

		this.lettersOfTheWord = this.wordInPlay.split('');
		this.rebuildWordView();
		this.processUpdateTotalGuesses();
	},

	updatePage: function(letter) {
		if (this.guessesLeft === 0) {
			this.restartGame();
		} else {
			this.updateGuesses(letter);
			this.updateMatchedLetters(letter);
			this.rebuildWordView();

			if (this.updateWins() === true) {
			this.restartGame();
			}
		}
	},

	updateGuesses: function(letter) {
		if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfTheWord.indexOf(letter) === -1)) {
			this.guessedLetters.push(letter);
			this.guessesLeft--;
			document.querySelector('#guesses-remaining').innerHTML = this.guessesLeft;
			document.querySelector('#guessed-letters').innerHTML = 
			this.guessedLetters.join('', '');
		}
	},

	processUpdateTotalGuesses: function() {
		this.totalGuesses = this.lettersOfTheWord.length + 5;
		this.guessesLeft = this.totalGuesses;
		document.querySelector('#guesses-remaining').innerHTML = this.guessesLeft;
	},

	updateMatchedLetters: function(letter) {
		for (var i = 0; i < this.lettersOfTheWord.length; i++) {
			if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
				this.matchedLetters.push(letter);
			}
		}
	},

	rebuildWordView: function() {
		var wordView = '';
		for (var i = 0; i < this.lettersOfTheWord.length; i++) {
			if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
				wordView += this.lettersOfTheWord[i];
			} 	else {
				wordView += '&nbsp;_&nbsp;';
			}
		}
		document.querySelector('#current-word').innerHTML = wordView;
	},

	restartGame: function () {
		document.querySelector('#guessed-letters').innerHTML = '';
		this.wordInPlay = null;
		this.lettersOfTheWord = [];
		this.matchedLetters = [];
		this.guessedLetters = [];
		this.guessesLeft = 0;
		this.totalGuesses = 0;
		this.letterGuessed = null;
		this.setupGame();
		this.rebuildWordView();
	},

	updateWins: function() {
		var win;
		if (this.matchedLetters.length === 0) {
			win = false;
		} else {
			win = true;
		}
		for (var i = 0; i < this.lettersOfTheWord.length; i++) {
			if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) === -1) {
				win = false;
			}
		}

		if (win) {
			audioOnLoad.pause();
			this.wins = this.wins + 1;
			document.querySelector('#wins').innerHTML = this.wins;

			var audio = new Audio(this.wordsToPick[this.wordInPlay].preview);
			audio.play();
			return true;
		}
		return false;
	}
};

hangmanGame.setupGame();
var audioOnLoad = new Audio('assets/audio/track-01.wav');
audioOnLoad.play();
document.onkeyup = function(event) {
	hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	hangmanGame.updatePage(hangmanGame.letterGuessed);
};
