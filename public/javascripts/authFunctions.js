function checkPasswords() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    console.log(password, confirmPassword);

    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById("confirm-password-error");

    if (password !== confirmPassword) {
        passwordError.textContent = "Passwords don't match";
        confirmPasswordError.textContent = "Passwords don't match"; 
    } else {
        passwordError.textContent = "Passwords match";
        confirmPasswordError.textContent = "Passwords match"; 
    }
}
