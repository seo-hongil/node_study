//서버를 띄어주는 코드
const app = require("../app");

//포트
const POST = 3000;

app.listen(POST,()=>{
    console.log("서버 가동");
});
