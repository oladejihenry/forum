const express = require('express');

const postController = require('../controllers/postController');

const router = express.Router();

router.get('/create', postController.createPost);

module.exports = router;