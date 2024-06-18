const mongoose = require('mongoose');
const Meals = require('../models/news');
const Model = mongoose.model('news');

//GET meals - full list
const newsList = async(req, res) =>{
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

const newsFindCode = async(req, res) => {
    const q = await Model 
        .find({'code' : req.params.newsCode })
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
    newsList,
    newsFindCode
};
