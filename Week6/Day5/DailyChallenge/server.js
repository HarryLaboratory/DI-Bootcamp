const express = require('express');
const session = require('express-session');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🎉', name: 'Party Popper' },
    { emoji: '🌞', name: 'Sun' },
    { emoji: '🌻', name: 'Sunflower' },
    { emoji: '🍎', name: 'Apple' }
];

// User authentication
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

// Serving static files 
app.use(express.static('public'));

// To get a random emoji with its options
app.get('/game', (req, res) => {
    const correctEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const options = generateOptions(correctEmoji);

    if (!req.session.username) {
        req.session.username = 'Guest';
    }

    // Difficulty level
    const difficulty = req.query.difficulty || 'easy';
    const timeLimit = difficulty === 'easy' ? 30 : difficulty === 'medium' ? 20 : 10; 
    const numOptions = difficulty === 'easy' ? 4 : difficulty === 'medium' ? 3 : 2; 

    res.json({
        emoji: correctEmoji.emoji,
        options: generateOptions(correctEmoji, numOptions),
        correctAnswer: correctEmoji.name,
        timeLimit: timeLimit,
        username: req.session.username,
        hint: generateHint(correctEmoji.name)
    });
});

// To generate random options
function generateOptions(correctEmoji, numOptions = 4) {
    const shuffledEmojis = emojis
        .filter(emoji => emoji.name !== correctEmoji.name)
        .sort(() => 0.5 - Math.random())
        .slice(0, numOptions - 1); 

    shuffledEmojis.push(correctEmoji);
    return shuffledEmojis.sort(() => 0.5 - Math.random());
}

// To generate a hint
function generateHint(name) {
    return `Hint: The first letter is '${name.charAt(0)}'`;
}

// User login
app.get('/login', (req, res) => {
    const username = req.query.username || 'Guest';
    req.session.username = username;
    res.send(`Logged in as ${username}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
