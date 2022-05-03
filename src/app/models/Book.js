const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Book = new Schema({
    name: {type: String, maxlength: 255, required: true},
    description: {type: String, maxlength: 600},
    image: {type: String, maxlength: 255},
    slug: {type: String, slug: 'name', unique: true, maxlength: 255}, 
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', Book);
