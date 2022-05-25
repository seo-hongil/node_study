" use strict ";

const home = (req,res)=>{
    //기능
    res.render("home/index") //도메인에 왔을 때 이동할 코드 (render)
};

const login = (req,res)=>{
    res.render("home/login")
};

//밖에서 사용할 수 있게 exports
module.exports = {
    home,
    login,
};

//  object로 빼줄 때 key만 입력하면 value에 key가 들어간거와 같다.
// { 
//     hello : hello,
//     login : login,
// }