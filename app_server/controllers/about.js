const tripsEndpoint = 'http://localhost:3000/api/about';
const options = {
    method: 'GET',
    headers: {
        'Accept' : 'application/json'
    }
}


// GET about view

const about = async function(req, res, next){
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
                    message = 'no about exist in database';
                }
            }
            res.render('about', {title: 'Travlr Getaways - About', about: json, message});

        })
        .catch(err=> res.status(500).send(e.message));
        //console.log('ABOUT CONTROLLER AFTER RENDER');
    };

    module.exports = {
        about
    }
