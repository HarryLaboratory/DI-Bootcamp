const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Simulating with an array
let blogPosts = [
  {
    id: 1,
    title: 'My first blog post',
    content: 'This is the content of the first blog post.',
  },
  {
    id: 2,
    title: 'Another blog post',
    content: 'This is the content of another blog post.',
  },
  {
    id: 3,
    title: 'The third post',
    content: 'Here is the content of the third blog post.',
  },
];

// GET request 
app.get('/posts', (req, res) => {
  res.json(blogPosts);
});

// GET request 
app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = blogPosts.find(p => p.id === postId);
  
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

// POST request 
app.post('/posts', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  const newPost = {
    id: blogPosts.length + 1,
    title,
    content,
  };

  blogPosts.push(newPost);
  res.status(201).json(newPost);
});

// PUT request 
app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;

  const postIndex = blogPosts.findIndex(p => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  blogPosts[postIndex] = { id: postId, title, content };
  res.json(blogPosts[postIndex]);
});

// DELETE request
app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = blogPosts.findIndex(p => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }

  blogPosts.splice(postIndex, 1);
  res.status(204).send(); 
});

// Error handling 
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// To start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

