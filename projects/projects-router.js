const express = require('express');

const Proj = require('../data/db-helpers.js')
const router = express.Router();

// get requests
    // projects 
router.get('/projects', (req, res) => {
    // get a list of all the projects from the database
    Proj.find('projects')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

      // resources
  router.get('/resources', (req, res) => {
    // get a list of all the resources from the database
    Proj.find('resources')
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

      // tasks
  router.get('/tasks', (req, res) => {
    // get a list of all the resources from the database
    Proj.findTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

 //-------------------------------------------------------------
  // Post requests

  router.post('/projects', (req, res) => {
    // add project to the database
    const addition = req.body;
    Proj.insert('projects', addition)
    .then(p => { 
      if(p){
      res.status(200).json(p);
      }else{
        res.status(400).json({message: 'invalid entry'})
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
    
  });

  router.post('/resources', (req, res) => {
    // add resources to the database
    const addition = req.body;
    Proj.insert('resources', addition)
    .then(r => { 
      if(r){
      res.status(200).json(r);
      }else{
        res.status(400).json({message: 'invalid entry'})
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  router.post('/tasks', (req, res) => {
    // add task to the database
    const addition = req.body;
    Proj.insert('tasks', addition)
    .then(t => { 
      console.log(t);
      if(t){
      res.status(200).json({message: `sucessesful`});
      }else{
        res.status(400).json({message: 'invalid entry'})
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });


  module.exports = router;
