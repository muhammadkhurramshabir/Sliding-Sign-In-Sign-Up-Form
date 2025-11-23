const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
// checking strength of password

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Select the sign-up password input field
  const signupForm = document.querySelector('.sign-up-form');
  const passwordField = signupForm.querySelector('input[type="password"]');

  // Thia is to create feedback element
  const strengthMsg = document.createElement('div');
  strengthMsg.id = 'pwd-strength';
  strengthMsg.style.marginTop = '8px';
  strengthMsg.style.fontSize = '0.9em';
  passwordField.parentElement.appendChild(strengthMsg);

  passwordField.addEventListener('input', function () {
    const value = passwordField.value;
    strengthMsg.textContent = getStrengthText(value);
    strengthMsg.style.color = getStrengthColor(value);
  });

  // Helper functions
  function getStrengthText(pwd) {
    if (pwd.length < 6) return "Too short";
    let score = 0;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/\d/.test(pwd)) score++;
    if (/[\W_]/.test(pwd)) score++;
    if (pwd.length >= 10) score++;
    switch (score) {
      case 0:
      case 1: return "Very weak";
      case 2: return "Weak";
      case 3: return "Medium";
      case 4: return "Strong";
      case 5: return "Very strong";
      default: return "Weak";
    }
  }
  function getStrengthColor(pwd) {
    let score = 0;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/\d/.test(pwd)) score++;
    if (/[\W_]/.test(pwd)) score++;
    if (pwd.length >= 10) score++;
    const colors = ['#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#27ae60'];
    return colors[Math.max(0, score - 1)];
  }
});
