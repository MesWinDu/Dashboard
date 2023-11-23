var express = require('express');
var router = express.Router();
const {indexcontroller} = require('../controllers/indexcontroller')

/* GET home page. */
router.get('/indexRouter', indexcontroller);

module.exports = router;
