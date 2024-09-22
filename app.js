
// Form validation for the contact form
document.querySelector('form').addEventListener('submit', function(e) {
    let name = document.querySelector('input[name="name"]').value;
    let message = document.querySelector('textarea[name="message"]').value;
    let email = document.querySelector('input[name="email"]').value;

    if (name === '' || message === '' || email === '') {
        e.preventDefault();
        alert('Please fill in all fields.');
    } else {
        alert('Form submitted successfully!');
    }
});

