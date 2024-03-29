const { Router } = require('express');
const express = require('express');
const route = express.Router();

const meController = require('../app/controllers/MeController');

// newsController.index
route.get('/stored/books', meController.storedBooks);
route.get('/trash/books', meController.trashBooks);


module.exports = route;
