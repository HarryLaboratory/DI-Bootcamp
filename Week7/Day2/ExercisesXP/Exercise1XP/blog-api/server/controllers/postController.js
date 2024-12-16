const postModel = require('../models/post');

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Get a single post by ID
const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postModel.getPostById(id);
    if (!post) {
      return res.status(404).send('Post not found');
    }
    res.json(post);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Create a new post
const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = await postModel.createPost(title, content);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Update a post
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedPost = await postModel.updatePost(id, title, content);
    if (!updatedPost) {
      return res.status(404).send('Post not found');
    }
    res.json(updatedPost);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Delete a post
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await postModel.deletePost(id);
    if (!deletedPost) {
      return res.status(404).send('Post not found');
    }
    res.json(deletedPost);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };
