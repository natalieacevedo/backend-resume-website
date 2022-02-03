const contactModel = require('../models/contactModel');

function postContactController(req,res){
    contactModel.postContact(req.body)
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(500).send('could not save info'))
};


module.exports = {

postContactController

};