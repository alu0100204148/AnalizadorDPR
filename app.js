/*
 * Module dependencies
 */
var express = require('express');
var app = express();


var sassMiddleware = require('node-sass-middleware');    
var coffeeMiddleware = require('coffee-middleware');



app.use("/stylesheets", express.static(__dirname + '/stylesheets'));

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(express.logger('dev'))


//SASS
app.use(
    sassMiddleware({
        src: __dirname, // where the sass files are 
        dest: __dirname, // where css should go
	debug: true // obvious
    })
);

//Coffee
app.use(
  coffeeMiddleware({
        src: __dirname, // where coffescripts are
        dest: __dirname + '/scripts', // where js sould go
        debug: true
  })
);


app.use(
  express.static(__dirname + '/public')
)



app.get('/', function (req, res) {
  res.render('index', { title : 'Home' }
  )
});


app.get('/test', function (request, response) {
   response.render('test', { title: 'test' });
});


app.listen(3000)

