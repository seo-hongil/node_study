"use strict";

// 문서객체 모델인 DOM 인터페이스를 사용해서 html에 존재하는 데이터를 가져와서 제어할 수 있다.
// DOM -> Document Object Mdoel

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register(){
    if(!id.value) return alert("아이디를 입력해주세요.");
    if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id : id.value,
        name : name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,  
    };
   
    fetch("/register", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login";
        }else{
            alert(res.msg);
        }
    }).catch((err) => {
        console.error("회원가입 중 에러 발생");
    });
   
}