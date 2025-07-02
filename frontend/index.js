document.addEventListener('DOMContentLoaded', function() {
    const signupLink = document.getElementById('signup');
    const loginHeader = document.querySelector('.top');
    const loginButton = document.querySelector('.button2');

    signupLink.addEventListener('click', function(event) {
        event.preventDefault();

        // Check if the extra field is already added
        const isExtraFieldAdded = document.querySelector('.extra-field') !== null;

        // Toggle the presence of the extra field
        if (isExtraFieldAdded) {
            // Remove extra field
            const extraField = document.querySelector('.extra-field');
            extraField.remove();
        } else {
            // Add extra field before the buttons
            const form = document.querySelector('.forms');
            const extraField = document.createElement('div');
            extraField.classList.add('one'); // Apply the same styling as other fields
            extraField.classList.add('extra-field');
            extraField.innerHTML = `
                <div class="symbol"></div>
                <label for="exampleInputExtra" class="form-label">Extra field</label>
                <input type="text" class="form-control" id="exampleInputExtra">
            `;
            form.insertBefore(extraField, loginButton.parentElement);
        }

        // Toggle button text between "Login" and "Register"
        const isRegistering = loginHeader.textContent === 'REGISTER';
        loginHeader.textContent = isRegistering ? 'LOGIN' : 'REGISTER';
        loginButton.textContent = isRegistering ? 'Login In' : 'Register';
    });
});
