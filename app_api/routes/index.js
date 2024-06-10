const express = require('express');
const router = express.Router();

// this is where we import the controllers
const tripsController = require('../controllers/trips');


// define route for trips endpoint
router  
    .route('/trips')
    .get(tripsController.tripsList);//GET method routes tripslist

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);


module.exports = router;