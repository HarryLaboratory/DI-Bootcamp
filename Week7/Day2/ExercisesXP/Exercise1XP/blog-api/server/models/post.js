const pool = require('../config/db');

// Get all posts
const getAllPosts = async () => {
  const result = await pool.query('SELECT * FROM posts');
  return result.rows;
};

// Get a single post by ID
const getPostById = async (id) => {
  const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
  return result.rows[0];
};

// Create a new post
const createPost = async (title, content) => {
  const result = await pool.query('INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *', [title, content]);
  return result.rows[0];
};

// Update a post
const updatePost = async (id, title, content) => {
  const result = await pool.query('UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *', [title, content, id]);
  return result.rows[0];
};

// Delete a post
const deletePost = async (id) => {
  const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };
