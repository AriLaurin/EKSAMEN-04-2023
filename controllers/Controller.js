const Product = require("../models/Products");

module.exports.home_get = async (req,res) => {
    try {
        const getDB = await Product.aggregate([
            {
              '$sort': {
                'createdAt': -1
              }
            }, {
              '$limit': 10
            }
          ]);
        res.render("home", {productresult: getDB})
    }
    catch(err){
        console.log(err);
        res.status(400)
    }

}

module.exports.admin_get = async (req,res) => {
    res.render("admin")
}

module.exports.home_post = async (req, res) => {

const {tittel, modell, merke, pris, artikkelnummer} = req.body;

try {
    const product = await Product.create({tittel, modell, merke, pris, artikkelnummer});
    res.status(201).json(product);
}
catch(err){
    res.status(400)
}

}