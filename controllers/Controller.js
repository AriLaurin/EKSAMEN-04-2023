const Product = require("../models/Products");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {email: "", password: ""};

    //incorrect email
    if(err.message === "incorrect email"){
        errors.email = "that email is not registered";
    }

        //incorrect password
        if(err.message === "incorrect password"){
            errors.password = "that password is not valid";
        }

    //duplicate error code
    if (err.code === 11000){
        errors.email = "that email is already registered";
        return errors;
    }

    //validation errors
    if(err.message.includes("user validation failed")){
                                        //destructuring the errors object, so we dont need to write .properties on error code
        Object.values(err.errors).forEach(({properties}) => {//errors object inside err value
            errors[properties.path] = properties.message; //upadting the error message with proper text
        });
    }

    return errors; 
}

const maxAge = 3 * 24 * 60 * 60; //three days in seconds

                    //id is the value we get from when we create a user, check the db where you can see that every user has an ID
const createToken = (id) => {
    return jwt.sign({id}, "gnome secret", { // first para is our id property which is our payload, second para is our secret, our key that we can never share, third para is options
        expiresIn: maxAge
    }); 
}

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

module.exports.login_get = async (req,res) => {
    res.render("login")
}

module.exports.login_post = async(req,res) => { //a function that renders our routes from AuthRoute
    const {email, password} = req.body; //destructuring, grabbing properties from our login post
    //console.log(req.body); //shows requests that are sent, such as emails and passwords

   // User.login(email, password);

    //console.log(email, password);
    //res.send("user login");

    try { 
        const user = await User.login(email, password) //if successful, const user gets the value of the account we accepted
        const token = createToken(user._id); //creates a token and returns it so we can have it stored here
        res.cookie("jwt", token, {httpOnly: true, maxAge: maxAge * 1000}); //value name, actual value and options
        res.status(200).json({user: user._id});
    }
    catch (err){ //if try gets an error, catch it
        const errors = handleErrors(err)//catching error
        res.status(400).json({errors});
    }
}

module.exports.veileder_get = async (req,res) => {
    res.render("veileder")
}