var express = require('express');
var router = express.Router();

router.use('/recipes', require('./recipes'));

module.exports = router;
