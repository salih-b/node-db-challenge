const db = require('../data/db-config.js');

module.export = {
    find, 
    findById
}


function find(){
    //resolves to array of businesses
    return db('businesses')
}


function findById(id){
    // resolves to single business or null
    return db('businesses').where({id}).first();
}