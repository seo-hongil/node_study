"use strict";

class UserStorage{
    static #users = {
        id: ["hong","개발원","서사원"],
        psword : ["1234","12345","123456"],
        name:['홍길동',"수지","배수지"]
    };
    
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    };

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); //=>[id,psword,name]
        const userInfo = userKeys.reduce((newUser,info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});

        return userInfo;
    }
};



module.exports = UserStorage;
