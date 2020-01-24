const express = require('express');
const router = express.Router();
/*
@route GET / api/posts/test
@desc GET / test posts route
@access public
*/
router.get('/test', (req, res) => res.json());
module.exports = router;