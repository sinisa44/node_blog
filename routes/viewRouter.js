const express = require('express');
const viewController = require('./../controllers/viewController');

const router = express.Router();

router
    .get( '/login', viewController.login )
    .get( '/register', viewController.register )
    .get('/', viewController.home )

module.exports = router;