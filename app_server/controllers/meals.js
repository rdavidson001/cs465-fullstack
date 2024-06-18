//const { mealList } = require("../../app_api/controllers/meals");

const tripsEndpoint = 'http://localhost:3000/api/meals';
const options = {
    method: 'GET',
    headers: {
        'Accept' : 'application/json'
    }
}


// GET Meals view

const meals = async function(req, res, next){
    await fetch(tripsEndpoint, options)
        .then(res => res.json())
        .then(json => {
            //console.log(json);
            let message = null;
            if(!(json instanceof Array)){
                message = 'API lookup error';
                json = {};
            }
            else{
                if(!json.length){
                    message = 'no meals exist in database';
                }
            }
            res.render('meals', {title: 'Travlr Getaways - Meals', meals: json, message});

        })
        .catch(err=> res.status(500).send(e.message));
        //console.log('MEALS CONTROLLER AFTER RENDER');
    };

    module.exports = {
        meals
    }
