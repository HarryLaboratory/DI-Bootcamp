const loadButton = document.getElementById('load-character');
const loadingMessage = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');
const characterInfo = document.getElementById('character-info');

// The Native audio player
const audioPlayer = document.getElementById('star-wars-music');

// To display character info
function displayCharacter(data) {
  loadingMessage.style.display = 'none';
  errorMessage.style.display = 'none';
  
  characterInfo.style.display = 'block';
  
  // The character details
  document.getElementById('name').textContent = `Name: ${data.name}`;
  document.getElementById('height').textContent = `Height: ${data.height} cm`;
  document.getElementById('gender').textContent = `Gender: ${data.gender}`;
  document.getElementById('birth-year').textContent = `Birth Year: ${data.birth_year}`;
  document.getElementById('homeworld').textContent = `Homeworld: ${data.homeworld}`;
}

// The character data
function getRandomCharacter() {
  loadingMessage.style.display = 'block';
  characterInfo.style.display = 'none'; 
  errorMessage.style.display = 'none'; 

  // Random character ID 
  const randomId = Math.floor(Math.random() * 83) + 1;

  const apiUrl = `https://www.swapi.tech/api/people/${randomId}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.result) {
        const characterData = data.result.properties;

        fetch(characterData.homeworld)
          .then(response => response.json())
          .then(homeworldData => {
            characterData.homeworld = homeworldData.result.properties.name;
            displayCharacter(characterData);
          })
          .catch(error => {
            errorMessage.style.display = 'block';
            loadingMessage.style.display = 'none';
          });
      } else {
        throw new Error('Character not found');
      }
    })
    .catch(error => {
      errorMessage.style.display = 'block';
      loadingMessage.style.display = 'none';
    });
}

loadButton.addEventListener('click', function() {
  // Start playing the audio player automatically
  audioPlayer.play();

  getRandomCharacter();
});



