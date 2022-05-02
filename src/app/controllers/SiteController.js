const Book = require('../models/Book');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Book.find({}, function (err, books) {
            if (!err) {res.json(books);}
            else {res.status(400).json(err);}
        });
        // res.render('home');
    }

    // [GET] /searcb
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
