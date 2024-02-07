document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validate();
    });

    function validate() {
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        if (emailValue === "") {
            setError(email, 'Email address cannot be empty');
        } else if (!emailCheck(emailValue)) {
            setError(email, 'Enter a valid email address');
        } else {
            setSuccess(email);
        }

        if (passwordValue === "") {
            setError(password, 'Password cannot be empty');
        } else {
            setSuccess(password);
        }

        if (emailValue !== "" && passwordValue !== "") {
            
            fetch('http://localhost/api/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ5b3VyX2lzc3VlciIsInN1YiI6MSwiaWF0IjoxNzA3Mjc2MzI0LCJleHAiOjE3MDcyNzk5MjR9.TNKZiUztr_SggnTYXjo2Y3x7raVXANVKs0OScUPgGJw'
                },
                body: JSON.stringify({ email: emailValue, password: passwordValue })
            })
            .then(response => {
                if (response.ok) {
                    
                    window.location.href = "dashboard.html";
                } else {
                    
                    console.error('Authentication failed');
                }
            })
            .catch(error => {
                console.error('Error during authentication:', error);
            });
        }
    }

    function setError(input, message) {
        const parent = input.parentElement;
        const small = parent.querySelector('small');
        small.innerText = message;
        parent.classList.add('error');
        parent.classList.remove('success');
    }

    function setSuccess(input) {
        const parent = input.parentElement;
        parent.classList.add('success');
        parent.classList.remove('error');
    }

    function emailCheck(input) {
        const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailReg.test(input);
    }
});