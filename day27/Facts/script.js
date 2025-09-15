let url="https://catfact.ninja/fact";
let btn=document.querySelector("button");
btn.addEventListener("click", async()=>{
    let fact= await getfacts();
    document.querySelector("p").innerText=fact;
})

async function getfacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("Error-", e);
        return "No Fact Found"
    }
}