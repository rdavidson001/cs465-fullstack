const express = require('express');
const router = express.Router();

const {expressjwt: jwt} = require("express-jwt");
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms:['SHA256']
});

// this is where we import the controllers
const tripsController = require('../controllers/trips');
const mealsController = require('../controllers/meals');
const newsController = require('../controllers/news');
const roomsController = require('../controllers/rooms');
const aboutController = require('../controllers/about');
//register authentication routes
const authController = require('../controllers/authentication');

router
    .route('/login')
    .post(authController.login);
router
    .route('/register')
    .post(authController.register);

//APIT ROUTES
// define route for trips endpoint
router  
    .route('/trips')
    .get(tripsController.tripsList)//GET method routes tripslist
    .post(auth, tripsController.tripsAddTrip);//POST method to add a trip

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth,tripsController.tripsUpdateTrip);
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);


//route to get list of meals and singular meals
router  
    .route('/meals')
    .get(mealsController.mealList);

router
    .route('/meals/:mealCode')
    .get(mealsController.mealFindCode);

//route to get list of news and singulrar news
router
    .route('/news')
    .get(newsController.newsList)
router 
    .route('/news/:newsCode')
    .get(newsController.newsFindCode);

//route to get list of rooms and singular rooms
router  
    .route('/rooms')
    .get(roomsController.roomList)
router
    .route('/rooms/:roomsCode')
    .get(roomsController.roomFindCode);

//route to get the single about 
router
    .route('/about')
    .get(aboutController.about);
router
    .route('about/:aboutCode')
    .get(aboutController.aboutFindCode);



module.exports = router;