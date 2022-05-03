const Book = require('../models/Book');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class BookController {
    
    // [GET] /book/:slug
    show(req, res, next) {
        Book.findOne({ slug: req.params.slug })
            .then(book => {
                res.render('books/show', { book: mongooseToObject(book) });
            })
            .catch(next);

        // res.send('Book details');
    }

    // [GET] /book/create
    create(req, res, next) {
        res.render('books/create')
    }

    // [POST] /book/store
    store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        formData.image = formData.image || 'https://via.placeholder.com/150';
        const book = new Book(formData);
        book.save()
            .then(book => { res.redirect('/books/' + book.slug) })
            .catch(next);
        
    }

    // [GET] /book/:id/edit
    edit(req, res, next) {
        Book.findById(req.params.id)
            .then(book => res.render('books/edit', {
                book: mongooseToObject(book)
            }))
            .catch(next);
        
    }

    index(req, res, next) {
        res.render('home');
    }
}

module.exports = new BookController();
