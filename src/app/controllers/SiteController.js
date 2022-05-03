const Book = require('../models/Book');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        // Book.find({}, function (err, books) {
        //     if (!err) {
        //         res.json(books);
        //     } else {
        //         next(err);
        //     }
        // });

        Book.find({})
            .then(books => {
                res.render('home', { 
                    books: multipleMongooseToObject(books) 
                });
            })
            .catch(next);
        // res.render('home');
    }

    // [GET] /searcb
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
