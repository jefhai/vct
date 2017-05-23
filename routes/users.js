const express = require('express')
const router = express.Router()

// Get Register Page
router.get('/register', function(req, res) {
	res.render('register')
})

// Get Login Page
router.get('/login', function(req, res) {
	res.render('login')
})

module.exports = router;
