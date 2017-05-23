const express = require('express')
const router = express.Router()

// Get Index Page
router.get('/', function(req, res) {
	res.render('index')
})

module.exports = router;
