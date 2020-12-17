const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

// GET login page
router.get('/login', authController.getLogin);

// GET signup page
router.get('/signupsignup', authController.getSignup);

// POST login form
router.post('/login', authController.postLogin);

// POST signup form
router.post('/signupsignup', authController.postSignup);

// POST logout request
router.post('/logout', authController.postLogout);

module.exports = router;