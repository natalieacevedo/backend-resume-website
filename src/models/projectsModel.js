const connection = require(../db-config.js);

function getProjects(){
    return connection.promise()
    .query('SELECT * FROM projects')
    .then([results] => {
        console.log(results);
        return results;
    })
    .catch((err) => return err);
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
    const { name,year,skills } = newProject;
    return connection
      .promise()
      .query(
        'INSERT INTO projects (name,year,skills ) VALUES(?,?,?)',
        [name,year,skills]
      )
      .then((results) => {
        res.status(201).send('project successfully saved')
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send('could not save the project')
      });
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
      return results.affectedRows;
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject();
    });
  };

  module.exports = {
    getProjects,
    getProject,
    getProjectImages,
    postProject,
    putProject,
    deleteProject

  };
  
