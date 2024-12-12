const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();
const PORT = 5000;

app.get('/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        res.json(posts); 
        console.log('Data has been successfully retrieved and sent');
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
