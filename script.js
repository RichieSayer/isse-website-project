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

    // --- 2. Trivia Quiz Logic (Simple Text Matching) ---
    const checkAnswerBtn = document.getElementById("checkAnswerBtn");
    if (checkAnswerBtn) {
        checkAnswerBtn.addEventListener("click", function () {
            const userAnswerInput = document.getElementById("triviaAnswer").value.trim().toLowerCase();
            const resultBox = document.getElementById("triviaResult");

            if (userAnswerInput === "") {
                resultBox.style.display = "block";
                resultBox.style.backgroundColor = "#fde8e8";
                resultBox.style.color = "#e74c3c";
                resultBox.textContent = "Please enter an answer before verifying.";
                return;
            }

            resultBox.style.display = "block";

            // Accept exact phrase or with standard spacing variations
            if (userAnswerInput === "central processing unit") {
                resultBox.style.backgroundColor = "#e8f8f5";
                resultBox.style.color = "#2ecc71";
                resultBox.innerHTML = `🎉 <strong>Correct!</strong> Central Processing Unit is the primary hardware brain running instructions on a computer core system.`;
            } else {
                resultBox.style.backgroundColor = "#fde8e8";
                resultBox.style.color = "#e74c3c";
                resultBox.innerHTML = `❌ <strong>Incorrect.</strong> "<em>${userAnswerInput}</em>" isn't quite right. Hint: The letters stand for C______ P_________ U___. Try again!`;
            }
        });
    }
});