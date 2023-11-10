const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('node:path'); 
const exphbs = require('express-handlebars'); 
const port = 3000;
const route = require('./routes');

app.use(express.static(path.join(__dirname,'public'))); 

app.use(express.urlencoded({extended : true}));
app.use(express.json());
//app.use(morgan('combined'));

//Template engine 
app.engine('hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));

route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})