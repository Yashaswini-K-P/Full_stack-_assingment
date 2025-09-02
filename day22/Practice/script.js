let para=document.createElement("p");
para.innerText="Hey I'm red";
document.querySelector("body").append(para);
para.style.color="red";


let head=document.createElement("h3");
head.innerText="I'm a blue h3";
document.querySelector("body").append(head);
head.classList.add("second");

let division=document.createElement("div");
let h1=document.createElement("h1");
division.append(h1);
let para2= document.createElement("p");
division.append(para2);
h1.innerText="I'm in a div";
para2.innerText="ME too!!";
division.classList.add("three");
document.querySelector("body").append(division);
