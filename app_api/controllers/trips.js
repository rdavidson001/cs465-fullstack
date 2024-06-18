const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');


// GET: /trips - lists all the trips
//regardless of outcome, response must include html status code
//and json messae to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // no filter
        .exec();

        console.log(q);


    if(!q){
        return res  
                .status(404)
                .json(err);

    }
    else{ // return resulitn trip lsit
        return res
            .status(200)
            .json(q);
    }
};


const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) //return by code
        .exec();

        console.log(q);


    if(!q){
        return res  
                .status(404)
                .json(err);

    }
    else{ // return resulitn trip lsit
        return res
            .status(200)
            .json(q);
    }
};


// POST: /trips - adds trips

const tripsAddTrip = async(req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });
const q = await newTrip.save();
    if(!q){
        return res  
            .status(400)
            .json(err);
    }else{
        return res
            .status(201)
            .json(q);
    }
};

//PUT:/trips/:tripCode -adds new Trip
//regardless of outcome, response must include HTML

const tripsUpdateTrip = async(req,res)=>{
    console.log(req.params);
    console.log(req.body);

    const q = await Model
        .findOneAndUpdate(
            {'code':req.params.tripCode},
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            }
        )
        .exec();

        if(!q){
            return res
                .status(404)
                .json(err);
        }else{
            return res
                .status(210)
                .json(q);
        }

};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};
