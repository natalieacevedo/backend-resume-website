const express = require('express');

const picturesRoutes = express.Router();

const picturesController = require('../controllers/picturesController');

picturesRoutes.get('/', picturesController.getPicturesController);
picturesRoutes.post('/', picturesController.postPicturesController);


module.exports = picturesRoutes;