const tripsEndpoint = 'http://localhost:3000/api/rooms';
const options = {
    method: 'GET',
    headers: {
        'Accept' : 'application/json'
    }
}


// GET Rooms view

const rooms = async function(req, res, next){
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
                    message = 'no rooms exist in database';
                }
            }
            res.render('rooms', {title: 'Travlr Getaways - rooms', rooms: json, message});

        })
        .catch(err=> res.status(500).send(e.message));
        //console.log('MEALS CONTROLLER AFTER RENDER');
    };

    module.exports = {
        rooms
    }
