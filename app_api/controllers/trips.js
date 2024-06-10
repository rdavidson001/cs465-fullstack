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

module.exports = {
    tripsList,
    tripsFindByCode
};
