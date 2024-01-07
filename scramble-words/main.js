document.getElementById("start-form").addEventListener("submit", function(event) {
    event.preventDefault();
    startGame();
});

function getRandomWord() {
    const words = [
        "Abandon", "Ability", "Absence", "Academy", "Account", "Accuse",
        "Worship", "Worthy", "Yearn", "Yield", "Zenith"
    ];

    return words[Math.floor(Math.random() * words.length)];
}

function scrambleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

function startGame() {
    const playerName = document.getElementById("player-name").value;
    document.getElementById("game-container").remove();

    let count = 0;
    let score = 0;
    const gameOutput = document.getElementById("game-output");
    gameOutput.innerHTML = "";

    function displayWord() {
        count++;
        const word = getRandomWord();
        const scrambledWord = scrambleWord(word);

        gameOutput.innerHTML = `<p>Word ${count}/10</p>`;
        gameOutput.innerHTML += `<p class="card-header">${scrambledWord}</p>`;

        const inputLabel = document.createElement("label");
        inputLabel.textContent = "Enter your guess:";
        const inputField = document.createElement("input");
        inputField.type = "text";
        const submitButton = document.createElement("button");
        submitButton.type = "button";
        submitButton.textContent = "Submit";
        submitButton.classList.add("m-3", "btn", "btn-primary");
        // Listen for the "keydown" event on the input field
        inputField.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                // If Enter key is pressed, simulate a click on the submit button
                submitButton.click();
            }
        });

        submitButton.addEventListener("click", function() {
            const userGuess = inputField.value;
            if (userGuess && userGuess.toLowerCase() === word.toLowerCase()) {
                gameOutput.innerHTML += `<p>Congratulations ${playerName}! You unscrambled the word!</p>`;
                score++;
            } else {
                gameOutput.innerHTML += `<p>Incorrect ${playerName}. The word was: ${word}</p>`;
            }
            inputLabel.remove();
            inputField.remove();
            submitButton.remove();

            // Display the next word or end the game
            if (count < 10) {
                displayWord();
            } else {
                endGame();
            }
        });

        gameOutput.appendChild(inputLabel);
        gameOutput.appendChild(inputField);
        gameOutput.appendChild(submitButton);
    }

    // Start the game by displaying the first word
    displayWord();

    function endGame() {
        // Display final score and other game-end information
        gameOutput.innerHTML += `<hr>`;
        gameOutput.innerHTML += `<p>${playerName}, Your score is ${score} out of 10.</p>`;
        // Add any additional game-end messages or actions here
    }
}