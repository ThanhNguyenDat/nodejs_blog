const Book = require('../models/Book');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /
    
    // [GET] /searcb
    storedBooks(req, res, next) {
        Book.find({})
            .then(books =>  res.render('me/stored-books', {
                books: multipleMongooseToObject(books)
            }))
            .catch(next);
    }
}

module.exports = new MeController();
