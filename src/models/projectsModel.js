const connection = require('../db-config.js');

function getProjects(){
    return connection.promise()
    .query('SELECT * FROM projects')
    .then(results=> {
        console.log(results);
        return results[0];
    })
    .catch((err) => err);
};

function getProject(projectId){
    return connection
    .promise()
    .query('SELECT * FROM projects WHERE id=?', [projectId])
    .then(([data]) => data)
    .catch((err) => {
      console.log(err);
      return err;
    });
};

function getProjectImages(projectId) {
    return connection
      .promise()
      .query('SELECT * FROM images WHERE project_id=?', [projectId])
      .then(([data]) => data)
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  function postProject(newProject) {
    const { name,date,skills } = newProject;
    return connection
      .promise()
      .query(
        'INSERT INTO projects (name,date,skills ) VALUES(?,?,?)',
        [name,date,skills]
      );
      
  };

  function putProject(projectId, properties){
    return connection
    .promise()
    .query('UPDATE projects SET ? WHERE id=?', [properties, projectId])
    .then(() => {
      return 'project updated successfully';
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject();
    });
  };

  function deleteProject(projectId){
    return connection
    .promise()
    .query('DELETE FROM projects WHERE id=?', [projectId])
    .then(([results]) => {
      console.log(results + 'hola');
      return results.affectedRows === 1;

    })
    .catch((err) => {
      console.log(err);
      return Promise.reject();
    });
  };


function postImage(picture,project_id) {

    const { url,title } = picture;
    return connection
      .promise()
      .query(
        'INSERT INTO images (url,title,project_id ) VALUES(?,?,?)',
        [url,title,project_id]
      
      );
      
  };

  module.exports = {
    getProjects,
    getProject,
    getProjectImages,
    postProject,
    putProject,
    deleteProject,
    postImage

  };
  
