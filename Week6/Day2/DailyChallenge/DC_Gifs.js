// API Key
const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const apiUrl = 'https://api.giphy.com/v1/gifs/random';

// DOM elements
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const gifContainer = document.getElementById('gif-container');
const deleteAllButton = document.getElementById('delete-all');

// Function 
async function fetchRandomGif(query) {
    try {
        const response = await fetch(`${apiUrl}?api_key=${apiKey}&tag=${query}`);
        const data = await response.json();
        
        const gifUrl = data.data.images.downsized_large.url;

        const gifItem = document.createElement('div');
        gifItem.classList.add('gif-item');
        gifItem.innerHTML = `
            <img src="${gifUrl}" alt="${query}">
            <button class="delete-button">DELETE</button>
        `;

        gifContainer.appendChild(gifItem);

        const deleteButton = gifItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            gifContainer.removeChild(gifItem);
        });

    } catch (error) {
        console.error('Error fetching gif:', error);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const query = input.value.trim();
    if (query) {
        fetchRandomGif(query);
        input.value = ''; 
    }
});

// Delete 
deleteAllButton.addEventListener('click', () => {
    gifContainer.innerHTML = ''; 
});
