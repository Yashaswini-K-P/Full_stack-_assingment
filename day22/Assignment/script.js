let input =document.createElement("input");
let btn =document.createElement("button");
btn.innerText="Click Me !!"
document.querySelector("body").append(input);
document.querySelector("body").append(btn);

input.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");

let btn1 = document.querySelector("#btn");
btn1.style.color="white";
btn1.style.backgroundColor="blue";

let h1= document.createElement("h1");
h1.innerHTML="<u>DOM Practice</u>";
h1.style.color="purple";
document.querySelector("body").append(h1);

let p=document.createElement("p");
p.innerHTML="My College <b>yashu</b> owner";
document.querySelector("body").append(p);
