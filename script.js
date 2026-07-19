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

    // --- 2. Simplified True/False Trivia Logic ---
    const triviaButtons = document.querySelectorAll(".trivia-btn");
    const resultBox = document.getElementById("triviaResult");

    if (triviaButtons.length > 0 && resultBox) {
        const correctSolution = "true"; // A byte is indeed 8 bits!

        triviaButtons.forEach(button => {
            button.addEventListener("click", function () {
                const selectedChoice = this.getAttribute("data-answer");
                
                resultBox.style.display = "block";

                if (selectedChoice === correctSolution) {
                    resultBox.style.backgroundColor = "#e8f8f5";
                    resultBox.style.color = "#27ae60";
                    resultBox.innerHTML = `🎉 Correct! A single byte is fundamentally composed of exactly 8 individual bits of binary data.`;
                } else {
                    resultBox.style.backgroundColor = "#fde8e8";
                    resultBox.style.color = "#c0392b";
                    resultBox.innerHTML = `❌ Incorrect. Remember: 8 separate bits map out exactly 1 byte space. Give it another try!`;
                }
            });
        });
    }
});