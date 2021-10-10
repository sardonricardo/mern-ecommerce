const Maker = require('../models/mongodb_makers');

const getAllMakers = async (req, res) => {
    try {
        const makers = await Maker.find({}); 
        res.json(makers); 
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Server Error"}); 
    }
}

const getAllMakersById = async (req, res) => {

    try {
        const makers = await Maker.findById({}); 
        res.json(makers); 
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Server Error"}); 
    }
}