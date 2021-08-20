var express = require('express');
var router = express.Router();
const {Login} = require('../controllers/authentication/login')
const {CreatePoll} = require('../controllers/admin/polls')
const {UpdatePoll} = require('../controllers/admin/polls')
const {DeletePoll} = require('../controllers/admin/polls')
const {GetIndex} = require('../controllers/index')


/* GET home page. */

router.get('/', GetIndex)

router.get('/adminlogin', function(req, res, next) {
  res.render("adminlogin");
});

router.get('/dashboard', function(req,res,next){
  res.render("adminDashboard")
})

router.get('/createpoll', function(req,res,next){
res.render("createPoll")
})

router.get('/updatepoll', function(req,res,next){
  res.render("updatePoll")
  })



router.post('/createPoll', CreatePoll)
router.post('/updatePoll', UpdatePoll)

router.get('/deletepoll/:id', DeletePoll)

router.post('/signIn', Login)




module.exports = router;
