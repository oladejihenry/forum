const express = require('express');

const adminController = require('../controllers/adminController');

const router = express.Router();

router.get('/', adminController.getIndex);

router.post('/add-product', adminController.createBlogPost);

module.exports = router;