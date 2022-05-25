 "use strict";

// 문서객체 모델인 DOM 인터페이스를 사용해서 html에 존재하는 데이터를 가져와서 제어할 수 있다.
// DOM -> Document Object Mdoel

const id = document.querySelector("#id"),
pswrod = document.querySelector("#psword"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click",login);

function login(){
    const req = {
        id : id.value,
        psword: pswrod.value,
    };
    
    fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
    .then((res) => res.json())
        // res의 반환 : Response 스트림, 
        // Response는 데이터가 모두 받아진 상태가 아닌데, 
        //res.json() 메서드를 통해 Response stream을 읽어올 수 있다.
        // 그래서 다 읽은 body의 text(= res.json() )를 promise 형태로 반환한다. 
        
    .then((res) => console.log(res))
    // parameter로 오는 값은 생략을 할 수가 있다.
    // = then(console.log);
    
};