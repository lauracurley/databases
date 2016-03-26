var models = require('../models');
var app = require('../app.js');

module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get(username, text, room);

      app.get('/classes/messages', cors(corsOptions), function(req, res) {
        res.status(200);
        res.setHeader('Content-Type', 'application/json');  // this is different because it's not json?
        res.send(JSON.stringify(data));  // here is where we send back all the messages
      });
    }, // a function which handles a get req for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
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
    post: function (req, res) {}
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