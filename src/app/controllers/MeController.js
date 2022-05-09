const Book = require('../models/Book');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /
    
    // [GET] /searcb
    storedBooks(req, res, next) {
        Promise.all([Book.find({}), Book.countDocuments()])
            .then(([books, deletedCount]) => 
                res.render('me/stored-books', {
                    deletedCount,
                    books: multipleMongooseToObject(books),
                }),
                )
            .catch(next);
    }

    trashBooks(req, res, next) {
        Book.findDeleted({})
            .then((books) =>  
                res.render('me/trash-books', {
                    books: multipleMongooseToObject(books),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
