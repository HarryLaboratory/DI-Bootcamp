// Exercise 1
// Giphy API URL
const url = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

fetch(url)
  .then(response => {
    // (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // (the JSON data)
    console.log(data);
  })
  .catch(error => {
    console.error('There was an error fetching the data:', error);
  });


// Exercise 2

const apiKey = 'Here is where i need to put my Giphy API'; 
const searchQuery = 'sun';  
const limit = 10;  
const offset = 2; 

// The URL for the API request
//const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=${limit}&offset=${offset}&rating=g&lang=en`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


// Exercise 3

// Creating an async function
async function fetchStarshipData() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      
      console.log(data.result);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }

  fetchStarshipData();
  
// Exercise 4

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// Output 

//calling
//resolved

/*
The code logs "calling" immediately, then waits for 2 seconds as it resolves a promise. 
After the 2-second delay, it logs "resolved" because that’s the value returned by the promise. 
The await keyword pauses the function until the promise is fulfilled.
*/