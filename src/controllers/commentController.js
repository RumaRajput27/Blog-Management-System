const db = require('../config/db');

// Add Comment
exports.addComment = (req, res) => {
  const { postId } = req.params;
  const { comment } = req.body;
  const userId = req.user.id;

  db.query('INSERT INTO comments (post_id, user_id, comment) VALUES (?, ?, ?)', 
    [postId, userId, comment], 
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Comment added successfully' });
  });
};

// Get Comments for Post
exports.getComments = (req, res) => {
  const { postId } = req.params;

  db.query('SELECT * FROM comments WHERE post_id = ?', [postId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
