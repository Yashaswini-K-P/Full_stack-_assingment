let MO=document.querySelector("#MO");
MO.addEventListener("mouseout", function(){
    this.style.color="red";
})

let press=document.querySelector("#press");
let label=document.querySelector("#label");
press.addEventListener("keypress", function(){
    for(letter of this.value){
        if(letter=='y' || letter=='Y'){
            label.innerText="My name is yashaswini K P"
        }
    }
})

window.addEventListener("scroll", function(event){
    console.log("Hello");
    label.style.color="green";
})

let btn=document.querySelector("#btn");
let circle=document.querySelector("#circle");
function image(){
    let img = document.createElement("img");
    img.src="yashu.jpg";
    img.height=200;
    img.width=120;
    img.addEventListener("load", function(){
    console.log("image loaded");
    }) ;
    circle.appendChild(img);
}
btn.addEventListener("click", image);


let btn2=document.querySelector("#btn2");
btn2.addEventListener("click", function(){
    this.style.backgroundColor="lightgreen"
})

let inp=document.querySelector("#inp");
let Q3=document.querySelector("#Q3");
inp.addEventListener("keypress", function(){
    let code=this.value;
    let alpha="";
    for(let i=0; i<this.value.length; i++){
    if((code[i]>='A' && code[i]<='Z') ||(code[i]>='a' && code[i]<='z')){
        alpha+=this.value[i];
    }
    }
    this.value=alpha;
    Q3.innerText=alpha;
})