let allBoldItems = [];

function getBoldItems() {
    allBoldItems = document.querySelectorAll('#text strong');
}

function highlight() {
    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = 'blue';
    }
}

function returnItemsToDefault() {
    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = 'black';
    }
}

document.getElementById('text').addEventListener('mouseover', function() {
    getBoldItems();  
    highlight();     
});

document.getElementById('text').addEventListener('mouseout', function() {
    returnItemsToDefault();
});

