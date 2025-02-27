function sendMail() {
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    emailjs.send('template_1jjy7q3', 'template_1jjy7q3', parms)
        .then(function(response) {
            alert('Your Email has been sent!');
            console.log('SUCCESS!', response);
        })
        .catch(function(error) {
            alert('Failed to send email. Please try again.');
            console.error('FAILED...', error);
        });
}
