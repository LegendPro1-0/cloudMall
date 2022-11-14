var express = require('express');
var controllerAddress = require('../controller/addresses');
var router = express.Router();

/* GET users listing. */
router.post('/update', controllerAddress.update);
router.get('/list', controllerAddress.list);

module.exports = router;
