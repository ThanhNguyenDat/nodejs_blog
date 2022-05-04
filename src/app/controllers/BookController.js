const Book = require('../models/Book');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class BookController {
    
    // [GET] /books/:slug
    show(req, res, next) {
        Book.findOne({ slug: req.params.slug })
            .then(book => {
                res.render('books/show', { book: mongooseToObject(book) });
            })
            .catch(next);

        // res.send('Book details');
    }

    // [GET] /books/create
    create(req, res, next) {
        res.render('books/create')
    }

    // [POST] /books/store
    store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        formData.image = formData.image || 'https://via.placeholder.com/150';
        const book = new Book(formData);
        book.save()
            .then(book => { res.redirect('/books/' + book.slug) })
            .catch(next);
        
    }

    // [GET] /books/:id/edit
    edit(req, res, next) {
        Book.findById(req.params.id)
            .then(book => res.render('books/edit', {
                book: mongooseToObject(book)
            }))
            .catch(next);
        
    }
    // [PUT] /books/:id
    update(req, res, next) {
        Book.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/books'))
            .catch(next);
        //res.json(req.body);
    }

    // [DELETE] /books/:id
    delete(req, res, next) {
        Book.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    index(req, res, next) {
        res.render('home');
    }
}

module.exports = new BookController();
