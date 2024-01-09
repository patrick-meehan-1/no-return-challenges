document.getElementById("start-form").addEventListener("submit", function(event) {
    event.preventDefault();
    startGame();
});

const tangrams = [
    "whale", "elephant", "dog", "cat", "lion", "seal", "camel", "panda", "horse", "crab"
];

function startGame() {
    const playerName = document.getElementById("player-name").value;
    document.getElementById("game-container").remove();

    let count = 0;
    let score = 0;
    let startTime = performance.now(); // Record the start time
    const gameOutput = document.getElementById("game-output");
    gameOutput.innerHTML = "";


    function displayWord() {
        count++;
        const word = tangrams[count - 1];

        gameOutput.innerHTML = `<p>Puzzle ${count}/10</p>`;
        gameOutput.innerHTML += `<img src="tangrams/${count}.PNG" alt="Tangram ${count}">`;

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
                score++;
            } else {}
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
        let endTime = performance.now(); // Record the end time
        let totalTime = (endTime - startTime) / 1000; // Convert to seconds

        gameOutput.innerHTML += `<hr>`;
        gameOutput.innerHTML += `<p>${playerName}, Your score is ${score} out of 10.</p>`;
        gameOutput.innerHTML += `<p>Time taken: ${totalTime.toFixed(2)} seconds</p>`;
    }
}