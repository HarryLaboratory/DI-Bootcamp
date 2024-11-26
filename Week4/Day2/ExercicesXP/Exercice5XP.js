// Exercise 5

const container = document.getElementById('container');
console.log(container);

const firstUl = document.querySelectorAll('ul')[0];
const firstLi = firstUl.querySelectorAll('li')[0];
firstLi.textContent = "Richard";

const secondUl = document.querySelectorAll('ul')[1];
const secondLi = secondUl.querySelectorAll('li')[1];
secondLi.remove();

const uls = document.querySelectorAll('ul');
for (let i = 0; i < uls.length; i++) {
    uls[i].querySelector('li').textContent = "Your Name";  
}

uls.forEach(ul => {
    ul.classList.add('student_list');
});

const firstUlElement = uls[0];
firstUlElement.classList.add('university', 'attendance');

container.style.backgroundColor = "lightblue";
container.style.padding = "20px";

const firstUlLis = firstUl.querySelectorAll('li');
firstUlLis.forEach(li => {
    if (li.textContent === "Dan") {
        li.style.display = "none"; 
    }
});

firstUl.querySelectorAll('li').forEach(li => {
    if (li.textContent === "Richard") {
        li.style.border = "2px solid black"; 
    }
});

document.body.style.fontSize = "18px";

//Bonus
if (container.style.backgroundColor === "lightblue") {
    const usersInDiv = Array.from(firstUl.querySelectorAll('li')).map(li => li.textContent);
    alert("Hello " + usersInDiv.join(" and "));
}