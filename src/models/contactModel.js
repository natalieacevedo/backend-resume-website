const connection = require('../db-config.js');


function postContact(newContact){
    const {name,email,message} = newContact;
    return connection
    .promise()
    .query(
        'INSERT INTO contact (name, email,message) VALUES(?,?,?)',
        [name,email,message]
    );
}


module.exports = {
    postContact
  };

