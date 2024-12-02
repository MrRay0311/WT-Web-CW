document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    const errorMessages = this.querySelectorAll('.error-message');
    const successMessage = this.querySelector('.success-message');
    
    // Reset messages
    errorMessages.forEach(msg => msg.style.display = 'none');
    successMessage.style.display = 'none';
    
    // Simple validation
    let isValid = true;
    
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        errorMessages[0].style.display = 'block';
        isValid = false;
    }
    
    if (password.length < 6) {
        errorMessages[1].style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        // Show success message
        successMessage.style.display = 'block';
        
        // Simulate redirect after successful login
        setTimeout(() => {
            window.location.href = 'index.html'; // Redirect to main page
        }, 2000);
    }
});

// Add some interactive effects
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});