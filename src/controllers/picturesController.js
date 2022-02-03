function getPicturesController(req,res){
picturesModel.getPictures()
.then((pictures) => res.status(200).json(pictures))
.catch((err) => res.status(500).send('sorry can not get your pics'));

};


function postPicturesController(req,res){

picturesModel.postPicture(req.body)
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(500).send('could not save your picture'))

};

module.exports = {
    postPicturesController,
    getPicturesController

};





