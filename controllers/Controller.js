const Product = require("../models/Products");

module.exports.home_get = async (req,res) => {
    try {
        const getDB = await Product.find();
        res.render("home", {name: getDB})
    }
    catch(err){
        console.log(err);
        res.status(400)
    }

}

module.exports.home_post = async (req, res) => {

const {name} = req.body;

try {
    const product = await Product.create({name});
    res.status(201).json(product);
}
catch(err){
    res.status(400)
}

}