const express = require('express');

const projectsRoutes = express.Router();

const projectsController = require(../controllers/projectsController);

projectsRoutes.get('/', projectsController.getProjectsController);
projectsRoutes.get('/:id', projectsController.getProjectController);
projectsRoutes.get('/:id/images', projectsController.getImagesController);
projectsRoutes.post('/', projectsController.postProjectController);
projectsRoutes.put('/:id', projectsController.putProjectController);
projectsRoutes.delete('/:id', projectsController.deleteProjectController);

module.exports = projectsRoutes;