const express = require('express');

const router = express.Router();

const project = require('../model/project');
const team = require('../model/team');
const alumni = require('../model/alumni')
const events = require('../model/events')
const resources = require('../model/resources')
const achievements = require('../model/achievements')


// Routes
router.get('/projects', (req, res) => {

    project.find()
        .then((data) => {
            // console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.get('/teams', (req, res) => {

    team.find()
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.get('/alumni', (req, res) => {

    alumni.find()
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.get('/events', (req, res) => {

    events.find()
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.get('/resources', (req, res) => {

    resources.find()
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.get('/achievements', (req, res) => {

    achievements.find()
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.get('/:productid',(req, res) => {
  
    // const prodId = req.params.productid;
    // console.log(prodId);
    // console.log(req.params.id);
  
    
    project.findById(req.params.productid)
    .then((data) => {
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error) => {
        console.log('error: ', error);
    });
  });





module.exports = router;