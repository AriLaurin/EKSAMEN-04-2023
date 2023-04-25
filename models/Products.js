const mongoose = require('mongoose');

const testProduct = new mongoose.Schema({
    name: {
      type: String,
      required: true
    }
  });
  
  const Product = mongoose.model('Shoe', testUser);

//   const newUser = new User({
//   name: 'NINETEEN YOTTABITES'
// });

// newUser.save()
//   .then(() => {
//     console.log('User created!');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

  // testUser.post("save", function (doc, next){
  //   console.log("input saved to DB", doc);
  //   next();
  // })


module.exports = Products;