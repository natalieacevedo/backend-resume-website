const projectsModel = require('../models/projectsModel');

function getProjectsController(req,res){
    projectsModel.getProjects()
    .then((projects) => res.status(200).json(projects))
    .catch((err) => res.status(500).send('sorry, could get the projects'));
};

function getProjectController(req,res){
    const projectId = req.params.id;
    projectsModel.getProject(projectId)
    .then((project) => {
        if(project[0]){
            res.status(200).json(project[0]);
        }else{
            res.status(404).send('that project does not exist')
        }
        
    })
    .catch((err) => res.status(500).send('sorry can not get you that project'))

};

function getImagesController(req,res){
    const projectId = req.params.id;
    projectsModel.getProjectImages(projectId)
    .then((images) => {
        if(images[0]){
            res.status(200).json(images);  
        }else{
            res.status(404).send('no images in this project')
        }
    })
    .catch((err) => res.status(500).send('error getting the images of this project '))
};

function postProjectController(req,res){
    projectsModel.postProject(req.body);
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(500).send('could not save your project'))
};

function putProjectController(req,res){
    const projectId = req.params.id;
    projectsModel.putProject(albumId, req.body)
    .then(() => res.sendStatus(204))
    .catch((err) => res.status(500).send('sorry could not update that project'))
};

function deleteProjectController(req,res){
    const projectId=req.params.id;
    projectModel.deleteProject(projectId)
    .then((respuesta) => res.status(204))
    .catch((err) => res.status(500).send('could not erase that project'));
};

module.exports = {
    getProjectsController,
    getProjectController,
    getImagesController,
    postProjectController,
    putProjectController,
    deleteProjectController

};