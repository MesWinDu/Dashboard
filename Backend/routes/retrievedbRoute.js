const express = require('express');
const router = express.Router();
const {retrievedb} = require('../controllers/retrievedb');

router.get('/retrievedb', retrievedb);

module.exports = router;