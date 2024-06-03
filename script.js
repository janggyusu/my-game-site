const words = ["javascript", "python", "java", "hangman", "developer"];
let word = words[Math.floor(Math.random() * words.length)];
let guessed = Array(word.length).fill("_");
let attempts = 6;

document.getElementById('word').textContent = guessed.join(" ");

function updateWordDisplay() {
    document.getElementById('word').textContent = guessed.join(" ");
}

function checkGameOver() {
    if (guessed.join("") === word) {
        document.getElementById('message').textContent = "You won!";
    } else if (attempts <= 0) {
        document.getElementById('message').textContent = `You lost! The word was ${word}.`;
    }
}

function createKeyboard() {
    const keyboard = document.getElementById('keyboard');
    for (let char of "abcdefghijklmnopqrstuvwxyz") {
        let button = document.createElement('button');
        button.textContent = char;
        button.onclick = () => {
            if (word.includes(char)) {
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === char) {
                        guessed[i] = char;
                    }
                }
            } else {
                attempts--;
            }
            updateWordDisplay();
            checkGameOver();
            button.disabled = true;
        };
        keyboard.appendChild(button);
    }
}

createKeyboard();
updateWordDisplay();
