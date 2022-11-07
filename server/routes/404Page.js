const express = require('express');
const router = express.Router();

/* GET 404 page. */
router.get('/', function (req, res, next) {
   res.json({ title: 'Page not found', status: 404, message: 'Page not found' });
});

module.exports = router;
