const db = require('../data/db-config.js');

module.exports = {
    find, 
    insert
}


function find(finding){
    //resolves to array 
    return db(`${finding}`);
}


function insert(table ,changes){
    // resolves to single xxx
    return db(`${table}`).insert(changes)
    .then(ids => {
      const id = ids[0];
  
      db(`${tables}`)
        .where({ id })
        .first();
    });
}