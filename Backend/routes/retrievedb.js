var express = require('express');
var router = express.Router();
const {retrievedbcontroller} = require("../controllers/retrievedbcontroller")

router.get('/retrievedbRouter', retrievedbcontroller);

module.exports = router;