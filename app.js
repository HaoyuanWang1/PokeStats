var dbURL = 'mongodb://localhost:27017/test';
var mongoose = require('mongoose')
var db = mongoose.connect(dbURL);
mongoose.Promise = require('bluebird');
mongoose.connection.once('connected', function() {
    console.log("Connected to database")
});

var bodyParser = require('body-parser');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('method-override')());
app.use(require('cookie-parser')());
app.use(require('express-session')({
    secret: 'my cookie',
    maxAge: 3600000,
    resave: true,
    saveUninitialized: true
}));

app.use(express.static(__dirname + '/public'));


// Routes

require('./routes/index')(app);

app.listen(3000);