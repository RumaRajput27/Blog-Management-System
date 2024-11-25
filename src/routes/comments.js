const express = require('express');
const auth = require('../middleware/auth');
const { addComment, getComments } = require('../controllers/commentController');
const router = express.Router();

router.post('/:postId', auth, addComment);
router.get('/:postId', getComments);

module.exports = router;
