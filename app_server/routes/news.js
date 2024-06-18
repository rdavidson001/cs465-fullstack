const express = require('express');
const router = express.Router();
const controller = require('../controllers/news');

//GET meals page
router.get('/', controller.news);


module.exports = router;