var express = require('express');
var router = express.Router();
const {Login} = require('../controllers/authentication/login')

/* GET home page. */

router.get('/', function(req,res,next){
  res.render("index", {title: "Voting Application"} ) 
})

router.get('/adminlogin', function(req, res, next) {
  res.render("adminlogin");
});

router.get('/dashboard', function(req,res,next){
  res.render("adminDashboard")
})

router.post('/signIn', Login)



module.exports = router;
