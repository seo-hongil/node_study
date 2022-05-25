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
};



module.exports = UserStorage;
