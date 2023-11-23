//---2---
let div = document.createElement("div");
let input = document.createElement("input");
input.setAttribute('type', 'text');

let btn1 = document.createElement("button");
let btn2 = document.createElement("button");

btn1.innerHTML = "Close";
btn2.innerHTML = "Open";

document.body.append(div);
div.append(input, btn1, btn2);

btn2.disabled = true;

let myFunction = ()=>{
    input.disabled = true;
    btn2.disabled = false;
    btn1.disabled = true;
}

btn1.addEventListener("click", myFunction);

let myFunc = ()=>{
    input.disabled = false;
    btn1.disabled = false;
    btn2.disabled = true;
}

btn2.addEventListener("click", myFunc);

div.style.display = "flex";
div.style.gap = "10px";
div.style.marginTop = "100px";
div.style.marginLeft = "100px";
input.style.width = "300px";
input.style.border = "2px solid";
btn1.style.width = "120px";
btn2.style.width = "120px";
btn1.style.height = "40px";
btn2.style.height = "40px";
btn1.style.fontSize = "25px";
btn2.style.fontSize = "25px";
btn1.style.border = "2px solid";
btn2.style.border = "2px solid";
btn1.style.cursor = "pointer";
btn2.style.cursor = "pointer";