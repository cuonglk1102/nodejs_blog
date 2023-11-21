const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const app = express();
const path = require('node:path');
const exphbs = require('express-handlebars');
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));
//app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    exphbs.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.listen(port, () => {
    console.log(`App app listening on port ${port}`);
});

route(app);
