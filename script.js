document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. Contact Form Processing & Basic Validation ---
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); 

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                formFeedback.style.color = "#e74c3c";
                formFeedback.textContent = "Please fill out all required form fields.";
                return;
            }

            formFeedback.style.color = "#2ecc71";
            formFeedback.textContent = `Thank you, ${name}! Your message was successfully captured.`;
            contactForm.reset();
        });
    }

    // --- 2. Trivia Quiz Logic (Interactive Password Cracker Engine) ---
    const checkAnswerBtn = document.getElementById("checkAnswerBtn");
    if (checkAnswerBtn) {
        // The hidden system key target string
        const secretPassword = "cyber";

        checkAnswerBtn.addEventListener("click", function () {
            const guessInput = document.getElementById("passwordGuess");
            const userGuess = guessInput.value.trim().toLowerCase();
            const resultBox = document.getElementById("triviaResult");

            // Input Validation Guard Rail
            if (userGuess.length !== 5) {
                resultBox.style.display = "block";
                resultBox.style.backgroundColor = "#fde8e8";
                resultBox.style.color = "#e74c3c";
                resultBox.textContent = "Syntax Error: Security overrides require a string of exactly 5 letters.";
                return;
            }

            resultBox.style.display = "block";

            // Instant win validation
            if (userGuess === secretPassword) {
                resultBox.style.backgroundColor = "#e8f8f5";
                resultBox.style.color = "#2ecc71";
                resultBox.innerHTML = `🔓 <strong>ACCESS GRANTED!</strong> Excellent work, hacker! You successfully cracked the firewall. The correct security string was indeed <strong>"${secretPassword}"</strong>.`;
                guessInput.value = ""; // Clear on win
            } else {
                // Compute character positional matches
                let exactMatches = 0;
                for (let i = 0; i < 5; i++) {
                    if (userGuess[i] === secretPassword[i]) {
                        exactMatches++;
                    }
                }

                resultBox.style.backgroundColor = "#fff9db";
                resultBox.style.color = "#d35400";
                resultBox.innerHTML = `⚡ <strong>BREACH FAILED:</strong> Administrative passcode signature mismatch.<br>
                                       🔍 <strong>Clue:</strong> Your guess has <strong>${exactMatches} / 5</strong> characters in the correct slot positions. Refine your execution parameters!`;
            }
        });
    }
});