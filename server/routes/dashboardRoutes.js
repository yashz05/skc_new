var express = require('express');
var router = express.Router();
const dashboardController = require('./../controller/dashboardController');
const quotesController = require("../controller/quotesController");

// get all counts
router.get('/counts', dashboardController.getAllCounts);

// get all cvs
router.get('/cvs/list', dashboardController.getAllCvs);

// get all quotes
router.get('/quotes/all', quotesController.allQuotes);

module.exports = router;