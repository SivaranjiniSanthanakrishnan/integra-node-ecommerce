var express = require('express');
var router = express.Router();
var Reg = require('../modules/registerModule')

router.post('/signup', Reg.register);
router.post('/signin', Reg.login);

module.exports = router;