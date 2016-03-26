var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //perform mysql query to retrieve all the messages
      db.query('SELECT * FROM messages', function(err, results) {
        callback(err, results);
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      //perform mysql query to check it the roomname exists
        //if not, perform another query to add it
      //perform mysql query to add the message
      db.query('INSERT INTO messages (text) VALUES ("hallo!!")', params, function(err, results) {
        callback(err, results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM messages', function(err, results) {
        callback(err, results);
      });
    },//no obvious use at the moment
    post: function (params, callback) {
      //perform mysql query to check it the username exists
      db.query('SELECT name FROM users WHERE name = username', params, function(err, results) {
        callback(err, results);
      });
        //if not, perform another query to add it

    }
  }
};

