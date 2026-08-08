function validateForm() {
    // Get form values
    const pass = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;
    const male = document.getElementById('male');
    const female = document.getElementById('female');

    // Check if passwords match
    if (pass !== confirmPass) {
        alert("Passwords do not match.");
        return false;
    }

    // Check if a gender is selected
    if (!male.checked && !female.checked) {
        alert("Please select a gender.");
        return false;
    }

    // Check if terms and conditions are accepted
    if (!terms) {
        alert("You must accept the terms and conditions.");
        return false;
    }

    // All checks passed
    alert("Registration successful!");
    return true;
}
