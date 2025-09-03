let btn=document.querySelector("button");
let box=document.getElementById("box");
let h=document.querySelector("h1");
btn.addEventListener("click",function(){
    let a=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let c=Math.floor(Math.random()*255);
    let color=`rgb(${a}, ${b}, ${c})`;
    box.style.backgroundColor=color;
    h.innerText=color;
});
