var models = require('../models');
var app = require('../app.js');
var cors = require('cors');

app.use(cors());
var corsOptions = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  //'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Access-Control-Allow-Headers': 'content-type, accept, X-Parse-REST-API-Key, X-Parse-Javascript-Key, X-Parse-Application-Id, X-Parse-Client-Version, X-Parse-Session-Token, X-Requested-With, X-Parse-Revocable-Session, Content-Type',
  'X-Parse-Application-Id': 'id',
  'X-Parse-REST-API-Key': 'key'
 // Seconds.
};


module.exports = {
  messages: {
    get: function (req, res) {

      var data = models.messages.get(username, text, room);

      app.get('/classes/messages', cors(corsOptions), function(req, res) {
        res.status(200);
        res.setHeader('Content-Type', 'application/json');  // this is different because it's not json?
        res.send(JSON.stringify(data));  // here is where we send back all the messages
      });
    }, // a function which handles a get req for all messages
    post: function (req, res) {
      app.get('/classes/messages', cors(corsOptions), function(req, res) {
        res.status(200);
        res.setHeader('Content-Type', 'application/json');  // this is different because it's not json?
        res.send('somestring that doesnt matter');  // here is where we send back all the messages
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      app.get('/classes/users', cors(corsOptions), function(req, res) {
        res.status(200);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(data));
      });

    },
    post: function (req, res) {
      console.log(req);

      models.users.post(req.username);
      app.post('/classes/users', cors(corsOptions), function(req, res) {
        res.status(200);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(data));
      });
    }
  }
};



// app.post('/classes/messages', cors(corsOptions), function(req, res) {
//   res.status(201);
//   res.setHeader('Content-Type', 'application/json');

//   //get req body
//   addMessage(req.body);
//   console.log('whats here', JSON.stringify(data));
//   res.send(JSON.stringify(data));
// });