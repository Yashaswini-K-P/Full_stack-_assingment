let url="https://dog.ceo/api/breeds/image/random";
let btn=document.querySelector("button");

btn.addEventListener("click", async()=>{
    let link= await getimage();
    let img=document.querySelector("#dog");
    img.setAttribute("src", link);
})

async function getimage(){
    try{
        let res= await axios.get(url);
        return res.data.message;
    }catch(e){
        console.log(e);
        return "Image not found";
    }
}