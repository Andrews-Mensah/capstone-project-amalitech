const User = require('../../models').User
const bcrypt = require('bcrypt');
const validator = require('validator');

const saltRounds = 10;


module.exports.Login = async (req, res, next) => {
    console.log(req.body)
    if (!validator.isEmail(req.body.email) || !req.body.password){
        return res.status(400).send({ error: "Data not formatted properly" });
    }

    let user = await User.findOne({
        where : {
            email:req.body.email
        }
    });

if(!user){
    const validPassword = await bcrypt.compare(req.body.password, user.password);
        console.log(validPassword)
        res.send({message: validPassword, error:"User with the email do not exist"})
    }else{

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        console.log(validPassword)
        if (validPassword) {
        req.session.user = user;
        res.send({message:"Success", error: "", RedirectURL:"/user/"})
    }

        else {
            req.session.errorMessage = "Invalid email or password"
            res.send({message: "", error:"Invalid email or password"})}
    }
}




module.exports.Logout = async (req,res,next) =>{
    
    req.session.destroy ((error) => {
        if (error) {
            console.log('Error:failed to destroy session during logout'); 
            req.user = null;
            res.redirect('/login')}

    }

   
)};
