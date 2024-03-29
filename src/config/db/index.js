const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
        });
        console.log('MongoDB connected');
    }

    catch (error) {
        console.log('MongoDB connection error:', error);
    }

}

module.exports = { connect };