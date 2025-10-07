// Function to validate the form inputs
function validateForm(event) {
    // Stop the form from submitting immediately so we can check the inputs
    event.preventDefault(); 

    // Get the input elements and their values
    const form = document.getElementById('registrationForm');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    
    let isValid = true;
    let errorMessages = []; // Array to collect all errors

    // Helper to add error and mark form as invalid
    const addError = (msg) => {
        errorMessages.push(msg);
        isValid = false;
    };

    // --- Validation Checks ---

    // 1. Name Check
    if (name.length < 2) {
        addError('Please enter your full name.');
    }

    // 2. Email Check (Basic format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        addError('Please enter a valid email address (e.g., user@domain.com).');
    }

    // 3. Password Check (Minimum length)
    if (password.length < 8) {
        addError('Password must be at least 8 characters long.');
    }

    // 4. Date of Birth Check
    if (dob === '') {
        addError('Date of Birth is required.');
    }
    
    // --- Result Handling ---
    
    if (isValid) {
        // If validation passes, you would typically use the form.submit() 
        // method here to send the data to a server.
        
        // For this frontend-only example, we show a success message:
        alert('🎉 Success! Registration details are valid and ready to be processed.');
        // form.submit(); // Uncomment this line to submit the form after validation
        form.reset(); // Clear the form for a clean state
    } else {
        // If validation fails, show all errors in an alert box
        alert('❌ Please correct the following errors:\n\n' + errorMessages.join('\n'));
    }
}

// 4. Attach the validation function to the form's submit event once the page loads
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
});