// script.js

function togglePasswordVisibility() {
    const passwordInput = document.querySelector('.password');
    const toggleBtn = document.querySelector('.toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = 'Show';
    }
}
