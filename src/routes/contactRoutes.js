const express = require('express');


const contactRoutes = express.Router();

const contactController = require('../controllers/contactController');

contactRoutes.post('/', contactController.postContactController);


module.exports = contactRoutes;