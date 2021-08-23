const Poll = require('../models').Poll


module.exports.GetIndex = async (req, res, next) => {
    let votingPolls = await Poll.findAll()
    if (votingPolls != null){
        res.render('index', {votingPolls})
    }
}

module.exports.GetSinglePoll = async (req, res, next) => {
    res.render('singlepoll')
}