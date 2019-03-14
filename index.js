const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const mongoose    = require('mongoose');
const cors        = require('cors');

const jwt    = require('jsonwebtoken');
const config = require('./config');
const tokenHelper = require('./helpers/tokens');

const port = process.env.PORT || 1990;
mongoose.connect(config.database);
app.set('superSecret', config.secret);

app.use(cors())
// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// =======================
// routes ================
// =======================
// basic route
app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

// API ROUTES -------------------

// get an instance of the router for api routes
var apiRoutes = express.Router();

// route middleware to verify a token
apiRoutes.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {
    tokenHelper.verifyToken(token, app.get('superSecret')).then((decoded) => {
      // if everything is good, save to request for use in other routes
      req.decoded = decoded;         
      next();
    }).catch(() => {
      return res.json({ success: false, message: 'Failed to authenticate token.' });       
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({ 
      success: false, 
      message: 'No token provided.' 
    });
  }
});

// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/', function(req, res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

// apply the routes to our application with the prefix /api
app.use('/api', require('./controllers/PublicController'))
app.use('/api', apiRoutes);
app.use('/api', require('./controllers/CatalogController'))
app.use('/api', require('./controllers/ProductController'))
app.use('/api', require('./controllers/OrdersController'))

// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);