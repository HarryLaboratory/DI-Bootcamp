document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');
    const usersAnswerList = document.querySelector('.usersAnswer');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const firstNameValue = document.getElementById('fname').value;
        const lastNameValue = document.getElementById('lname').value;

        if (firstNameValue.trim() === '' || lastNameValue.trim() === '') {
            alert('Both fields must be filled out!');
            return; 
        }

        const firstNameLi = document.createElement('li');
        firstNameLi.textContent = `First Name: ${firstNameValue}`;
        
        const lastNameLi = document.createElement('li');
        lastNameLi.textContent = `Last Name: ${lastNameValue}`;

        usersAnswerList.appendChild(firstNameLi);
        usersAnswerList.appendChild(lastNameLi);

        form.reset();
    });
});
