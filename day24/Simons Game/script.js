let gameseq=[]
let userseq=[]

let started=false;
let level=0;
let High=0;
let colors=["red", "green", "yellow", "blue"];
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    }
})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 150);
}

function check(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            userseq=[];
            setTimeout(levelUp, 1000);
        }
    }else{
        if(High<=level) High=level;
        h2.innerHTML=`Game Over!! Your score is ${level} <br>Your High score is ${High}<br>Press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 170);
        reset();
    }
}
function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=colors[randIdx];
    let btn=document.querySelector(`.${randColor}`)
    gameseq.push(randColor);
    console.log(gameseq);
    btnflash(btn);
}
function btnPress(){
    let btn=this;
    btnflash(btn);
    let id=btn.getAttribute("id");
    userseq.push(id);
    console.log(userseq);
    check(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click", btnPress)
}

function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}