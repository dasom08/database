/* eslint-disable */ 
var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log("!@@#U@U@##",models.messages.get(req))
      // db.connect(function(err){
      //   if(err) throw err; 
      //   console.log("message getMethod")
      // })
      // let sql = "select * from messages"
      // let result = "hello"
      //  db.query(sql,function(err,result){
      //   if(err) throw err; 
      //   console.log("model", result)
      //   res.end(JSON.stringify(result))
      //   //result를 컨트롤러에게 전달해야 할듯. 
      //   //첫번째 시도 : 모델에서 리턴하기. 안됨. 
      //   //두번째 수정 : get 함수 자체를 리턴. 앞에서 리졸트 변수를 선언해 주었으나 바뀌지 않음. 
      //   //세번째 : 컨트롤러로 쿼리를 넘겼으나, 디비 변수명 때문에 모델에 넣어주는게 맞다고 생각.
      //   //네번째 : 쿼리를 바로 리턴이 안됨. 
      //   //일곱째 : 프라미스 사용, 함수자체가 프라미스여야 then을 쓸 수 있으며, then으로 데이터를 받아옴. 
      // })
      models.messages.get()
      .then((data) =>{
        res.end(JSON.stringify(data))
      })

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //req,res --> to db 
      let test = {username:"kk" , text:"doit", roomname:"1", date:"2020-08"}
      models.messages.post(test)
    } 
    // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {}, // a function which handles a get request for all users
    post: function (req, res) {} // a function which handles posting a user to the database
  }
};

