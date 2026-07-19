document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. Contact Form Processing & Basic Validation ---
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Stay on page

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                formFeedback.style.color = "#e74c3c";
                formFeedback.textContent = "Please fill out all required form fields.";
                return;
            }

            // Success feedback message simulation
            formFeedback.style.color = "#2ecc71";
            formFeedback.textContent = `Thank you, ${name}! Your message was successfully captured.`;
            
            // Wipe inputs
            contactForm.reset();
        });
    }

    // --- 2. Trivia Quiz Logic (BMI Processing Engine) ---
    const calcBmiBtn = document.getElementById("calcBmiBtn");
    if (calcBmiBtn) {
        calcBmiBtn.addEventListener("click", function () {
            const heightInput = document.getElementById("height").value;
            const weightInput = document.getElementById("weight").value;
            const resultBox = document.getElementById("triviaResult");

            const height = parseFloat(heightInput);
            const weight = parseFloat(weightInput);

            // Validation Guard Rails
            if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
                resultBox.style.display = "block";
                resultBox.style.backgroundColor = "#fde8e8";
                resultBox.style.color = "#e74c3c";
                resultBox.textContent = "Error: Please provide realistic positive measurements.";
                return;
            }

            // Calculation Logic (Height converted: cm -> meters)
            const heightInMeters = height / 100;
            const bmi = weight / (heightInMeters * heightInMeters);
            const score = bmi.toFixed(1);
            
            let bracket = "";
            let hexColor = "";

            if (bmi < 18.5) {
                bracket = "Underweight";
                hexColor = "#f39c12"; // Amber yellow
            } else if (bmi >= 18.5 && bmi < 25) {
                bracket = "Normal weight";
                hexColor = "#2ecc71"; // Health green
            } else if (bmi >= 25 && bmi < 30) {
                bracket = "Overweight";
                hexColor = "#d35400"; // Soft orange
            } else {
                bracket = "Obese";
                hexColor = "#c0392b"; // Alert red
            }

            // Expose values into viewport dynamically
            resultBox.style.display = "block";
            resultBox.style.backgroundColor = "#eaf2f8";
            resultBox.style.color = "#2c3e50";
            resultBox.innerHTML = `Your computed score is <span style="color: ${hexColor}; font-size:1.15rem;">${score}</span>.<br>Classification status: <strong>${bracket}</strong>.`;
        });
    }
});