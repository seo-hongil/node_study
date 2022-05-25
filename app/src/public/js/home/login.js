"use strict";

// 문서객체 모델인 DOM 인터페이스를 사용해서 html에 존재하는 데이터를 가져와서 제어할 수 있다.
// DOM -> Document Object Mdoel

const id = document.querySelector("#id"),
pswrod = document.querySelector("#psword"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click",login());

function login(){
    const req = {
        id : id.value,
        psword: pswrod.value,
    };
};