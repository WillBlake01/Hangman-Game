var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var words = [
		"Hawkins",
		"Indiana",
		"Eleven",
		"Demogorgon",
		"Dartanion",
		"The Upside Down",
		"Mike Wheeler",
		"Will Byers",
		"Jim Hopper",
	];

var audio = [
"assets/audio/track-02",
"assets/audio/track-03",
"assets/audio/track-04",
"assets/audio/track-05",
"assets/audio/track-06",
"assets/audio/track-07",
"assets/audio/track-08",
"assets/audio/track-09",
"assets/audio/track-10",
];

var wins = 0;
var remGuesses = 15;

document.onkeyup = function() {
	var userguess = String.fromCharCode(event.keyCode).
		toLowerCase();

	console.log(userguess);
}

var randomWord = words[Math.floor(Math.random()*words.length)];

console.log(randomWord);

var html = "<p>PRESS ANY KEY TO GET<br>STARTED!</p>" +
"<p>WINS" + wins + "</p>" + "<p>CURRENT WORD" + randomWord + "</P>" + "<p>NUMBER OF GUESSES REMAINING" + 
remGuesses + "</p>" + "<p>LETTERS ALREADY GUESSED" + guessed + "</p>";

document.querySelector('#game-box-two').innerHTML = html;

