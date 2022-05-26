" use strict ";

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage")

 const output = {
    home : (req, res) => {
        //기능
        res.render("home/index") //도메인에 왔을 때 이동할 코드 (render)
    },
    
    login : (req, res) => {
        res.render("home/login")
    },

    register: (req,res) => {
        res.render("home/register")
    },
};

const process = {
    login : async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        
        return res.json(response);
    },
    
    register : (req, res) => {
        const user = new User(req.body);
        const response = user.register();
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