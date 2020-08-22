/* eslint-disable */ 

var db = require('../db');



module.exports = {
  messages: {
    get: function () {
      return new Promise((resolve,reject) =>{
        let sql = "select * from messages";
        db.query(sql, function(err,result){
          if(err) throw err; 
          resolve(result)
        })
      })
      // db.connect(function(err){
      //   if(err) throw console.log("connect",err); 
      //   console.log("message getMethod")
      // })
      // connect 음 왜 안쓰지...? 당황. 

      // let sql = "select * from messages"
      // // let result = "hello"
      //  db.query(sql,function(err,result){
      //   if(err) throw err; 
      //   // console.log("model", result)
      //   // return result; 
      //   //result를 컨트롤러에게 전달해야 할듯. 
      //   //첫번째 시도 : 모델에서 리턴하기. 안됨. 
      //   //두번째 수정 : get 함수 자체를 리턴. 앞에서 리졸트 변수를 선언해 주었으나 바뀌지 않음. 
      //   //세번째 : 컨트롤러로 쿼리를 넘겼으나, 디비 변수명 때문에 모델에 넣어주는게 맞다고 생각.
      //   //네번째 : 쿼리를 바로 리턴이 안됨. 
       
      //     resolve(result)
      //   )
    }, // a function which produces all the messages
    post: function (req) {
      //JSON 객체로 받아오지 않을까? 
      db.connect(function(err){
        if(err) throw err; 
        console.log("connected")
      })

      let sql = 
      `INSERT INTO chat (username, text , roomname , date ) 
        values (${req.username , req.text, req.roomname, req.date}) ` 
      db.query(sql,function(err,result){
        if(err) throw err; 
        console.log("send message to DB")
      } )
    } 
    // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


