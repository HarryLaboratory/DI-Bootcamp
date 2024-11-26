let navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');

let newLi = document.createElement('li');

let textNode = document.createTextNode('Logout');

newLi.appendChild(textNode);

let ul = navBar.getElementsByTagName('ul')[0];
ul.appendChild(newLi);

let firstLi = ul.firstElementChild;
let lastLi = ul.lastElementChild;

console.log("First list item text:", firstLi.textContent);
console.log("Last list item text:", lastLi.textContent);