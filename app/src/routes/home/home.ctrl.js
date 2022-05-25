" use strict ";

const UserStorage = require("../../models/UserStorage")

 const output = {
    home : (req, res) => {
        //기능
        res.render("home/index") //도메인에 왔을 때 이동할 코드 (render)
    },
    
    login : (req, res) => {
        res.render("home/login")
    },
};

const process = {
    login : (req, res) => {
        const id = req.body.id,
        psword = req.body.psword;

        const users = UserStorage.getUsers("id","psword");

        const response ={};
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg ="로그인에 실패했습니다.";
        return res.json(response);
    },
};
 
//밖에서 사용할 수 있게 exports
module.exports = {
    output,
    process, 
};

//  object로 빼줄 때 key만 입력하면 value에 key가 들어간거와 같다.
// { 
//     hello : hello,
//     login : login,
// }