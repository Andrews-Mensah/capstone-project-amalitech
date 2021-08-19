const Poll = require('../../models').Poll


//creating a poll
module.exports.CreatePoll = async (req,res,next) =>{
    const poll = await Poll.create(req.body);

    if(poll){
        req.session.successPollMessage = "Poll Created Successfully";
        res.redirect('dashboard')
    } else {
        req.session.errorPollMessage = "Poll Creation Was Not Successful"
        res.redirect('dashboard')
    }
};


//editing or updating a poll
module.exports.UpdatePoll = async (req,res,next) =>{
    const poll = await Poll.create(req.body);

    if(poll){
        req.session.successPollMessage = "Poll Created Successfully";
        res.redirect('dashboard')
    } else {
        req.session.errorPollMessage = "Poll Creation Was Not Successful"
        res.redirect('dashboard')
    }
};




//deleting a poll

module.exports.DeletePoll = async (req,res,next) =>{
    const poll = await Poll.create(req.body);

    if(poll){
        req.session.successPollMessage = "Poll Created Successfully";
        res.redirect('dashboard')
    } else {
        req.session.errorPollMessage = "Poll Creation Was Not Successful"
        res.redirect('dashboard')
    }
};


//retrieving all the polls
module.exports.RetrievingPoll = async (req,res,next) =>{
    const poll = await Poll.create(req.body);
    const polls = await Poll.findAll();
    if(poll){
        req.session.successPollMessage = "Poll Created Successfully";
        res.redirect('dashboard')
    } else {
        req.session.errorPollMessage = "Poll Creation Was Not Successful"
        res.redirect('dashboard')
    }
};
//getting a single poll
