const db = require('../config/db');

// Create Post
exports.createPost = (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id;

  db.query('INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)', 
    [title, content, userId], 
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Post created successfully' });
  });
};

// Update Post
exports.updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  db.query(
    'UPDATE posts SET title = ?, content = ? WHERE id = ? AND user_id = ?',
    [title, content, id, req.user.id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Post updated successfully' });
    }
  );
};

// Delete Post
exports.deletePost = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM posts WHERE id = ? AND user_id = ?', 
    [id, req.user.id], 
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Post deleted successfully' });
  });
};

// Get Posts with Pagination and Search
exports.getPosts = (req, res) => {
  const { page , limit , search = '' } = req.query;
  const offset = (page - 1) * limit;   /// imp 

  db.query(
    `SELECT * FROM posts WHERE title LIKE ? OR content LIKE ? LIMIT ?, ?`,
    [`%${search}%`, `%${search}%`, parseInt(offset), parseInt(limit)],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
};

// Get All Posts
exports.getAllPosts = (req, res) => {
  db.query(
    `SELECT * FROM posts`,
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
};
