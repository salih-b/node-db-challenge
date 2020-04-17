const express = require('express');

const Business = require('../data/db-helpers.js')
const router = express.Router();


router.get('/whatever', (req, res) => {
    // get all whatever from the database
    Business.find()
    .then(whatever => {
      res.status(200).json(whatever);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });



  module.exports = router;
