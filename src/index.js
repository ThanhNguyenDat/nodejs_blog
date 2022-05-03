const path = require('path');
const express = require('express'); 
const morgan = require('morgan');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');
// import { handlebars } from 'express-handlebars';

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Template Engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);

app.set('view engine', 'hbs');
// console.log(__dirname);
app.set('views', path.join(__dirname, 'resources', 'views'));

// routes init
route(app);

app.listen(port, () =>
    console.log(`App listening on http://localhost:${port}`),
);
