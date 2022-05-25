" use strict ";
// javascript를 만들때는 이크마 스트릭트의 문법을 준수하겠다는 선언을 맨위에 한다.

const express = require("express"); //여기서도 app.js에 있는 app(여기서는 router)을 사용해야 하니까 또 선언
const router = express.Router();

const ctrl = require("./home.ctrl");

// 요청왔을 때 처리되는 로직이 controller니까 빼주기
router.get("/",ctrl.output.home);
router.get("/login",ctrl.output.login);
router.post("/login",ctrl.process.login); 
//app.js에서 사용하기 위해 연결하는 부분 ( 외부에서 사용 가능하도록 내보내기 )
module.exports = router;