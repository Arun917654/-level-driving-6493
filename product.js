let products=document.getElementById("products");
let buttons=document.getElementById("buttons")
let rangebtn=document.getElementById("range");


// Fetch & render users

async function  Fetchdata(url){
try {
    let res=await  fetch(url);
    let data=await res.json()
    console.log(data)
    apidata=data;
   display(data)
} catch (error) {
    console.log(error)
}

}Fetchdata("http://localhost:3000/posts")
// ---------------------Sort-----------------------------

rangebtn.addEventListener("change",()=>{
    if(rangebtn.value===""){
        Fetchdata("http://localhost:3000/posts")
    }else{
        sort(+rangebtn.value)
    }
    
})
async function  sort(value){
try {
    let res=await  fetch("http://localhost:3000/posts");
    let data=await res.json()
    let sortedarr=[]
   for(let i=0;i<data.length;i++) {
        if(+data[i].price<=value){
            sortedarr.push(data[i])
        }else if(value===""){
            Fetchdata("http://localhost:3000/posts")
        }
    }
    display(sortedarr)

    
//    display(data)
} catch (error) {
    console.log(error)
}

}




// ----------------------  display function-----------------------------
function display(data){
    products.innerHTML=null;
     data.forEach(e => {
        products.append(makecards(e.image,e.name,e.price))
        
    });
}
function makecards(image,name,price){
  let card=document.createElement("div");
  card.className="cards";
  let imagediv=document.createElement("div");
  imagediv.id="imagediv"
  let img=document.createElement("img");
  img.src=image;
imagediv.append(img)
  let productname=document.createElement("p");
  productname.innerText=name;

  let productprice=document.createElement("p");
  productprice.innerText=price;
  
  let addtocart=document.createElement("button");
  addtocart.innerText="Add To Cart"
  card.append(imagediv,productname,productprice,addtocart);

  return card
}

