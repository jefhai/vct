const express = require('express')
const router = express.Router()

// Get Game Board Page
router.get('/gameboard', function(req, res) {
	res.render('gameboard')
})

module.exports = router;
