const mongoose = require('mongoose');
const Meals = require('../models/about');
const Model = mongoose.model('about');

//GET about
const about = async(req, res) =>{
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
const aboutFindCode = async(req, res) => {
    const q = await Model 
        .find({'code' : req.params.aboutCode })
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
    about,
    aboutFindCode
};
