var db = require('../db');

module.exports = {
  messages: {
    get: function (username, text, roomname) {
      //perform mysql query to retrieve all the messages
      db.query('SELECT * FROM messages', function(err, rows, fields) {
        if (err) throw err;
          console.log('printing all messages');
          console.log(rows + fields);
          return rows + ':' + fields;
      });
    }, // a function which produces all the messages
    post: function () {
      //perform mysql query to check it the roomname exists
        //if not, perform another query to add it
      //perform mysql query to add the message
        db.query('INSERT INTO messages (text) VALUES ("hallo!!")', function(err, rows, fields) {
          if (err) throw err;
          console.log('creating a message');
          console.log(rows + fields);
          return rows + ':' + fields;
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},//no obvious use at the moment
    post: function (username) {
      //perform mysql query to check it the username exists
      var exists = db.query('SELECT name FROM users WHERE name = username', function(err, rows, fields) {
        if (err) throw err;
        
          console.log('Its in thar!?');
          console.log(rows + fields);
          return rows + ':' + fields;
      });
      console.log('exists: ' + exists);
        //if not, perform another query to add it

    }
  }
};

