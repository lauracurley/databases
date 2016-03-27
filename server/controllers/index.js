var models = require('../models');
var app = require('../app.js');
var cors = require('cors');
var express = require('express');

var corsApp = express();
corsApp.use(cors());
var corsOptions = {
  'Access-Control-Allow-Origin': '*',
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

      models.messages.get(function (err, results) {
        // corsApp.get('/classes/messages', cors(corsOptions), function(req, res) {
        //   console.log('-------------------', res.status);
        //   res.status(res.status);
        //   res.setHeader('Content-Type', 'application/json');  // this is different because it's not json?
        //   // this is undefined because we're not using a callback!!!
        //   res.json(results);  // here is where we send back all the messages
        // });
        if (err) { console.log('error'); }
        // console.log( 'just the results', results);
        res.json(results);
      });

    }, // a function which handles a get req for all messages
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      app.get('/classes/users', cors(corsOptions), function(req, res) {
        res.status(200);
        res.setHeader('Content-Type', 'application/json');
        res.json(data);
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
  },
  any: {
    options: function(req, res) {
      res.set(corsOptions);
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