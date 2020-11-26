const express = require('express');
const auth = require('../controllers/authController');


const router = express.Router();

router
    .get('/login', auth.showLogin)
    .get('/register', auth.showLogin)

module.exports = router;