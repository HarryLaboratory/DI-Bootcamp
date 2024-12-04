const form = document.getElementById('userForm');
const outputArea = document.getElementById('output');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 


    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    const formData = {
        firstName: firstName,
        lastName: lastName
    };

    const jsonString = JSON.stringify(formData);

    outputArea.textContent = jsonString;
});
