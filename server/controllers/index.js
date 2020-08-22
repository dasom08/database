/* eslint-disable */ 
var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get()
      .then((data) =>{
        res.end(JSON.stringify(data))
      })

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body)
      .then((data) =>{
        res.end(JSON.stringify(data))
      });
    } 
    // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {

      models.users.get()
      .then((data) =>{
        res.end(JSON.stringify(data))
      })

    }, // a function which handles a get request for all users
    post: function (req, res) {
      models.users.post(req.body)
      .then((data) =>{
        res.status(200).end(JSON.stringify(data))
      })
    } // a function which handles posting a user to the database
  }
};

