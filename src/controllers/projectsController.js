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
        res.status(200).json(images);  
    })
    .catch((err) => res.status(500).send('error getting the images of this project '))
};

function postImagesController(req,res){
    console.log(req.body);
    const projectId = req.params.id;
    projectsModel.postImage(req.body,projectId)
    .then(() => res.sendStatus(201))
    .catch((err) => res.status(500).send('sorry could not create that image'))
};

function postProjectController(req,res){
    projectsModel.postProject(req.body)
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(500).send('could not save your project'))
};

function putProjectController(req,res){
    const projectId = req.params.id;
    projectsModel.putProject(projectId, req.body)
    .then(() => res.sendStatus(204))
    .catch((err) => res.status(500).send('sorry could not update that project'))
};

function deleteProjectController(req,res){
    const projectId=req.params.id;
    projectsModel.deleteProject(projectId)
    .then((respuesta) => res.status(204))
    .catch((err) =>{
        console.error(err);
       return res.status(500).send('could not erase that project');
    })
};





module.exports = {
    getProjectsController,
    getProjectController,
    getImagesController,
    postProjectController,
    putProjectController,
    deleteProjectController,
    postImagesController

};
