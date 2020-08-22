/* eslint-disable */ 

var db = require('../db');



module.exports = {
  messages: {
    get: function () {
      return new Promise((resolve,reject) =>{
        let sql = `select * from messages`;
        var queryArgs = [];
        db.query(sql, queryArgs, function(err, result){
          if(err) throw err; 
          resolve(result);
        })
      })
    }, // a function which produces all the messages
    post: function ( { username, text, roomname } ) {
      return new Promise((resolve,reject) =>{
        let sql = `INSERT INTO 
                    messages (username, text, roomname) 
                    values ( ?, ?, ? ) ` 
        var queryArgs = [ username, text, roomname ];
        db.query(sql, queryArgs, function(err, result){
          if(err) throw err; 
          resolve(result);
        })
      })      
    } 
    // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      return new Promise((resolve,reject) =>{
        let sql = `select * from messages`;
        var queryArgs = []
        db.query(sql, queryArgs, function(err, result){
          if(err) throw err; 
          resolve(result);
        })
      })
    },
    post: function ( { username } ) {
      return new Promise((resolve,reject) =>{
        let sql = `INSERT INTO users (username) 
                    values ( ? ) ` 
        var queryArgs = [ username ];
        db.query(sql, queryArgs, function(err, result){
          if(err) throw err; 
          resolve(result);
        })
      }) 
    }
  }
};


