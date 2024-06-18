const mongoose = require('mongoose');
const Meals = require('../models/rooms');
const Model = mongoose.model('rooms');

//GET meals - full list
const roomList = async(req, res) =>{
    const q = await Model
        .find({})// no filter
        .exec();

        console.log(q);

    if(!q){
        return res
            .status(404)
            .json(err);
    }
    else{
        return res
            .status(200)
            .json(q);
    }
};

const roomFindCode = async(req, res) => {
    const q = await Model 
        .find({'code' : req.params.mealCode })
        .exec();

        console.log(q);

    if(!q){
        return res  
            .status(404)
            .json(err);
    }
    else{
        return res  
            .status(200)
            .json(q);
    }
};

module.exports = {
    roomList,
    roomFindCode
};
