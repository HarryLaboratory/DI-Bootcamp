const h1Element = document.querySelector('h1');
console.log(h1Element);

const article = document.querySelector('article');
const paragraphs = article.querySelectorAll('p');
const lastParagraph = paragraphs[paragraphs.length - 1];
lastParagraph.remove();

const h2Element = document.querySelector('h2');
h2Element.addEventListener('click', function() {
    h2Element.style.backgroundColor = 'red';
});

const h3Element = document.querySelector('h3');
h3Element.addEventListener('click', function() {
    h3Element.style.display = 'none';
});

const boldButton = document.getElementById('boldButton');
boldButton.addEventListener('click', function() {
    const paragraphs = document.querySelectorAll('article p');
    paragraphs.forEach(p => {
        p.style.fontWeight = 'bold';
    });
});
