const mongoose = require('mongoose');
const Meals = require('../models/meals');
const Model = mongoose.model('meals');

//GET meals - full list
const mealList = async(req, res) =>{
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

const mealFindCode = async(req, res) => {
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
    mealList,
    mealFindCode
};
