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

    // --- 2. Trivia Quiz Logic (Binary to Decimal Verification) ---
    const checkAnswerBtn = document.getElementById("checkAnswerBtn");
    if (checkAnswerBtn) {
        // Target sequence '1011' equals 11 in Base-10 representation (8 + 0 + 2 + 1)
        const targetBinaryString = "1011";
        const correctDecimalValue = parseInt(targetBinaryString, 2);

        checkAnswerBtn.addEventListener("click", function () {
            const userAnswerInput = document.getElementById("decimalAnswer").value;
            const resultBox = document.getElementById("triviaResult");

            // Check if input is completely empty
            if (userAnswerInput === "") {
                resultBox.style.display = "block";
                resultBox.style.backgroundColor = "#fde8e8";
                resultBox.style.color = "#e74c3c";
                resultBox.textContent = "Please enter an integer guess before verifying.";
                return;
            }

            const parsedUserAnswer = parseInt(userAnswerInput, 10);

            resultBox.style.display = "block";

            if (parsedUserAnswer === correctDecimalValue) {
                resultBox.style.backgroundColor = "#e8f8f5";
                resultBox.style.color = "#2ecc71";
                resultBox.innerHTML = `🎉 Correct! <strong>${targetBinaryString}</strong> in binary evaluates to <strong>${correctDecimalValue}</strong> ($8 + 0 + 2 + 1$). Great job!`;
            } else {
                resultBox.style.backgroundColor = "#fde8e8";
                resultBox.style.color = "#e74c3c";
                resultBox.innerHTML = `❌ Incorrect. Your guess of <strong>${parsedUserAnswer}</strong> does not match. Hints: Evaluation weights map to standard base positions ($2^3, 2^2, 2^1, 2^0$). Try again!`;
            }
        });
    }
});