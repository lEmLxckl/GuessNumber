// Variabler
let randomNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;
let highScore = Infinity;

// Funktion til at opdatere besked på skærmen
function updateMessage(message) {
    document.getElementById('message').textContent = message;
}

// Funktion til at opdatere highscore visningen
function updateHighScore() {
    if (highScore === Infinity) {
        document.getElementById('highscore').textContent = 'High-score: Ingen endnu';
    } else {
        document.getElementById('highscore').textContent = `High-score: ${highScore} forsøg`;
    }
}

// Funktion til at nulstille spillet
function resetGame() {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    attempts = 0;
    document.getElementById('score').textContent = 'Antal forsøg: 0';
    updateMessage('Gæt et nummer!');
    document.getElementById('guessInput').value = '';
}

// Håndtering af gæt-knappen
document.getElementById('submitGuess').addEventListener('click', function () {
    const userGuess = Number(document.getElementById('guessInput').value);

    if (!userGuess || userGuess < 1 || userGuess > 20) {
        updateMessage('Indtast venligst et gyldigt tal mellem 1 og 20!');
        return;
    }

    attempts++;
    document.getElementById('score').textContent = `Antal forsøg: ${attempts}`;

    if (userGuess === randomNumber) {
        updateMessage('Tillykke! Du gættede rigtigt!');
        if (attempts < highScore) {
            highScore = attempts;
        }
        updateHighScore();
    } else if (userGuess < randomNumber) {
        updateMessage('For lavt! Prøv igen.');
    } else {
        updateMessage('For højt! Prøv igen.');
    }
});

// Håndtering af nulstil-knappen
document.getElementById('resetGame').addEventListener('click', resetGame);

// Initial opdatering af highscore ved indlæsning
updateHighScore();