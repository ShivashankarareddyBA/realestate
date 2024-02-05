document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the form fields
    var username = document.getElementsByName('name')[0].value;
    var password = document.getElementsByName('Password')[0].value;

    // Perform your login logic here (e.g., validate credentials)
    if (username === 'your_username' && password === 'your_password') {
        alert('Login successful!');
        // Redirect to another page if needed
        // window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
