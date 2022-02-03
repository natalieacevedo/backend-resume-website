const connection = require('../db-config.js');

function getPictures(){
    return connection.promise()
    .query('SELECT * FROM images')
    .then(results=> {
        console.log(results);
        return results[0];
    })
    .catch((err) => err);
};

function postPictures(newPic) {
    const { url,title,project_id } = newPic;
    return connection
      .promise()
      .query(
        'INSERT INTO images (url,title,project_id ) VALUES(?,?,?)',
        [url,title,project_id]
      );
      
  };

  module.exports = {
    getPictures,
    postPictures

  };
  