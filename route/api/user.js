const express = require('express');
const router = express.Router();
/*
@route GET / api/users/test
@desc GET / test users route
@access public
*/
router.get('/test', (req, res) => res.json({'msg':'test user'}));
module.exports = router;