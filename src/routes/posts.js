const express = require('express');
const auth = require('../middleware/auth');
const { createPost, getPosts, getAllPosts, updatePost, deletePost } = require('../controllers/postController');
const router = express.Router();

router.post('/', auth, createPost);
router.get('/', getPosts);
router.get('/getAllPosts', getAllPosts);  
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

module.exports = router;
