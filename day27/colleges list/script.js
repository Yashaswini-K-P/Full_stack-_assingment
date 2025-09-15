let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click", async()=>{
    let state=document.querySelector("input").value;
    let colleges= await indians(state);
    show(colleges);
})

function show(colleges){
    let list=document.querySelector("ul");
    list.innerText="";
    for(col of colleges){
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }

}
async function indians(state){
    try{
        let res= await axios.get(url + state);
        return res.data;
    }catch(e){
        console.log("No data");
        return [];
    }
}