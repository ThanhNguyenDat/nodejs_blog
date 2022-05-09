const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Book = new Schema({
    name: {type: String, maxlength: 255, required: true},
    description: {type: String, maxlength: 600},
    image: {type: String, maxlength: 255},
    slug: {type: String, slug: 'name', unique: true, maxlength: 255}, 
}, {
    timestamps: true
});

mongoose.plugin(slug);

Book.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all',
 });

module.exports = mongoose.model('Book', Book);
