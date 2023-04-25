const mongoose = require('mongoose');

const testProduct = new mongoose.Schema({
    tittel: {
      type: String,
      required: true
    },
    modell: {
      type: String,
      required: true
    },
    merke: {
      type: String,
      required: true
    },
    pris: {
      type: Number,
      required: true
    },
    artikkelnummer: {
      type: String,
      required: true
    }
  }, {timestamps: true});
  
  const Product = mongoose.model('Shoe', testProduct);

//   const newProduct = new Product({
//   tittel: 'Adidas Tilfeldig sko 2, unisex sko',
//   modell: "Tifeldig sko 2",
//   merke: "Adidas",
//   pris: 549,
//   artikkelnummer: "CW-1820"
// });

// newProduct.save()
//   .then(() => {
//     console.log('Product created!');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   testProduct.post("save", function (doc, next){
//     console.log("input saved to DB", doc);
//     next();
//   })


module.exports = Product;