const db = require('../data/db-config.js');

module.exports = {
    find, 
    insert,
    findTasks
}
// return db.select('t.*', 'p.projectName', 'p.description')
// .from('tasks as t').join('projects as p', 'p.id', 't.projects_id');


function find(finding){
    //resolves to array 
    return db(`${finding}`);
}

function findTasks(){
    //resolves to array 
    return db('tasks')
    .join('projects', 'tasks.project_id',  'projects.id')
    .select('tasks.id', 'projects.projectName', 'projects.description');
}
//                      RAW SQL 
// select t.id, p.projectName, p.description from tasks as t 
//     join projects as p on t.project_id =  p.id
    

function insert(table ,changes){
    // resolves to single xxx

    return db(`${table}`).insert(changes);
//     .then(ids => {
//       const id = ids[0];
//       console.log(ids);
//        db(`${table}`)
//         .where({ id });
//     });
}