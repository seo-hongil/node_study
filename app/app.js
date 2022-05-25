" use strict ";

// 모듈
const express = require('express');
const app = express();

//라우팅
const home = require('./src/routes/home') //만들어준 파일이기 때문에 상대적으로 폴더까지 입력

// app.js에서 view단을 처리해줄 수 있는 view engine을 setting
app.set("views","./src/views"); //view를 어디서 찾는지
app.set("view engine","ejs") //동작할 코드들을 어떤 engine으로 해석할지 설정 

// login.ejs에 login.js로 접속할 수 있게 정적경로를 추가
// dirname:현재 있는 파일의 경로를 반환 > 그 안에 있는 src/public 폴더를 정적경로로 추가
app.use(express.static('${__dirname}/src/public'));

//use -> 미들웨어를 등록해주는 메서드 ( "/" 경로로 오면 home으로 이동 > home으로 가서 라우터가 주소 찾아서 callback )
app.use("/", home); 

module.exports = app;