let inp=document.querySelector("input");
let btn=document.querySelector("#plus");
let ul=document.querySelector("ul");
btn.addEventListener("click", function(){
    let li=document.createElement("li");
    ul.appendChild(li);
    li.innerText=inp.value;
    inp.value="";
    let delbtn=document.createElement("button");
    li.appendChild(delbtn);
    delbtn.classList.add("del");
    delbtn.innerText="Delete";
    delbtn.addEventListener("click", function(){
        li.remove();
    })
})

