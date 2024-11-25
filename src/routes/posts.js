const express = require('express');
const auth = require('../middleware/auth');
const { createPost, getPosts, updatePost, deletePost } = require('../controllers/postController');
const router = express.Router();

router.post('/', auth, createPost);
router.get('/', getPosts);
router.get('/', getPosts);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

module.exports = router;
