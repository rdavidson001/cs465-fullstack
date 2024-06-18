const tripsEndpoint = 'http://localhost:3000/api/news';
const options = {
    method: 'GET',
    headers: {
        'Accept' : 'application/json'
    }
}


// GET News view

const news = async function(req, res, next){
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
                    message = 'no news exist in database';
                }
            }
            res.render('news', {title: 'Travlr Getaways - News', news: json, message});

        })
        .catch(err => res.status(500).send(message));
        //console.log('NEWS CONTROLLER AFTER RENDER');
    };

    module.exports = {
        news
    }
