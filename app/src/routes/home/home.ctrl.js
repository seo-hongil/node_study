" use strict ";
 const output = {
    home : (req, res) => {
        //기능
        res.render("home/index") //도메인에 왔을 때 이동할 코드 (render)
    },
    
    login : (req, res) => {
        res.render("home/login")
    },
};

const users = {
    id: ["hong","개발원","서사원"],
    pswrod : ["1234","12345","123456"],
}

const process = {
    login : (req, res) => {
        const id = req.body.id,
        psword = req.body.psword

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.pswrod[idx] === psword){
                return res.json({
                    success : true,
                });
            }
        }

        return res.json({
            success : false,
            msg : "로그인에 실패했습니다.",
        });

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