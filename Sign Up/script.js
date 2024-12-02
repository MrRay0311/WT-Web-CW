document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessages = document.querySelectorAll('.error-message');
    const successMessage = document.querySelector('.success-message');
    
    // Reset messages
    errorMessages.forEach(msg => msg.style.display = 'none');
    successMessage.style.display = 'none';
    
    // Validation
    let isValid = true;
    
    if (fullname.length < 3) {
        errorMessages[0].style.display = 'block';
        isValid = false;
    }
    
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        errorMessages[1].style.display = 'block';
        isValid = false;
    }
    
    if (password.length < 6) {
        errorMessages[2].style.display = 'block';
        isValid = false;
    }
    
    if (password !== confirmPassword) {
        errorMessages[3].style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        successMessage.style.display = 'block';
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }
});

// Password strength indicator
document.getElementById('password').addEventListener('input', function() {
    const strength = this.value.length;
    const indicator = document.querySelector('.password-strength');
    
    if (strength === 0) {
        indicator.style.width = '0%';
        indicator.style.background = '#ddd';
    } else if (strength < 6) {
        indicator.style.width = '33%';
        indicator.style.background = '#ff4444';
    } else if (strength < 10) {
        indicator.style.width = '66%';
        indicator.style.background = '#ffbb33';
    } else {
        indicator.style.width = '100%';
        indicator.style.background = '#00C851';
    }
});

// Form group animation
const formGroups = document.querySelectorAll('.form-group');
formGroups.forEach(group => {
    const input = group.querySelector('input');
    
    input.addEventListener('focus', () => {
        group.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', () => {
        group.style.transform = 'scale(1)';
    });
});

// Social signup buttons animation
const socialBtns = document.querySelectorAll('.social-btn');
socialBtns.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'translateY(0) scale(1)';
    });
});