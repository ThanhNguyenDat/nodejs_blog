const { Router } = require('express');
const express = require('express');
const route = express.Router();

const booksController = require('../app/controllers/BookController');

// newsController.index
route.get('/create', booksController.create);
route.post('/store', booksController.store);
route.get('/:id/edit', booksController.edit);
route.put('/:id', booksController.update);
route.get('/:slug', booksController.show);
route.get('/', booksController.index);

module.exports = route;
