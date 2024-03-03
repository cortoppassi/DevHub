var express = require('express');
var router = express.Router();
const registerController = require('../controller/registerController')

router.post('/', registerController.userRegistration);

module.exports = router;
