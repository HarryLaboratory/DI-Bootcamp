const form = document.getElementById('libform');
const libButton = document.getElementById('lib-button');
const shuffleButton = document.getElementById('shuffle-button');
const storyElement = document.getElementById('story');
const stories = [
  "Once upon a time, there was a(n) [adjective] [noun] named [person]. They loved to [verb] at the [place].",
  "In a [adjective] world, [person] decided to [verb] with a magical [noun] at the [place].",
  "[person] went to the [place] with their [adjective] [noun] to [verb] and have an adventure."
];

function generateStory() {
  const noun = document.getElementById('noun').value;
  const adjective = document.getElementById('adjective').value;
  const person = document.getElementById('person').value;
  const verb = document.getElementById('verb').value;
  const place = document.getElementById('place').value;

  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all fields.");
    return;
  }

  const story = stories[Math.floor(Math.random() * stories.length)] 
    .replace('[noun]', noun)
    .replace('[adjective]', adjective)
    .replace('[person]', person)
    .replace('[verb]', verb)
    .replace('[place]', place);

  storyElement.textContent = story;
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  generateStory();
});

shuffleButton.addEventListener('click', function() {
  generateStory();
});
