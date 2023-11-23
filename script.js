//---1---
let btn = document.querySelector("#btn");
let body = document.querySelector("body");

let radio1 = document.createElement("input");
let radio2 = document.createElement("input");
let radio3 = document.createElement("input");

let div = document.createElement("div");
let p_element1 = document.createElement("p");
let p_element2 = document.createElement("p");
let p_element3 = document.createElement("p");

radio1.setAttribute('type', 'radio');
radio2.setAttribute('type', 'radio');
radio3.setAttribute('type', 'radio');

radio1.setAttribute('name', 'exam');
radio2.setAttribute('name', 'exam');
radio3.setAttribute('name', 'exam');

div.style.display = "flex";
div.style.gap = "10px";
div.style.fontSize = "25px";

let text1 = "Yaslilar ucun";
let text2 = "Boyukler ucun";
let text3 = "Kicikler ucun";

radio1.value = text1;
radio2.value = text2;
radio3.value = text3;

p_element1.innerHTML = text1;
p_element2.innerHTML = text2;
p_element3.innerHTML = text3;

body.prepend(div);
div.append(p_element1, radio1, p_element2, radio2, p_element3, radio3);

let myFunc = ()=>{
    let input = document.querySelector('input[name="exam"]:checked');
    console.log(input.value);
}

btn.addEventListener("click", myFunc);