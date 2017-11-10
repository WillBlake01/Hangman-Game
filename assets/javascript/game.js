//Array of alphabet
var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Array of solution words
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

//Array of songs
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

//Initial declaration of variables
var wins = 0;
var remGuesses = 15;
var randomWord = words[Math.floor(Math.random()*words.length)];
var guessed = "";

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
var html = "<p>PRESS ANY KEY TO GET<br>STARTED!<br></p>" +
"<p><br>WINS<br>" + wins + "</p>" + "<p><br>CURRENT WORD<br>" + randomWord + "</P>" + "<p><br>NUMBER OF GUESSES REMAINING<br>" + 
remGuesses + "</p>" + "<p><br>LETTERS ALREADY GUESSED<br>" + guessed + "</p>";

document.querySelector('#game-box-two').innerHTML = html;

