let products=document.getElementById("products");
let buttons=document.getElementById("buttons")
let rangebtn=document.getElementById("range");
let sortbyprice=document.querySelector(".select-by-price")
let filterbycolor=document.getElementById("Color")
// Fetch & render users
async function  Fetchdata(url){
try {
    let res=await  fetch(url);
    console.log(res)
    let data=await res.json()
   
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
        if(+data[i].Price<=value){
            sortedarr.push(data[i])
        }else if(value===""){
            Fetchdata("http://localhost:3000/posts")
        }
    }
    display(sortedarr)
} catch (error) {
    console.log(error)
}

}

// ---------------------------sort by price------------------------
sortbyprice.addEventListener("change",()=>{
    if(sortbyprice.value==="asc"){
        Fetchdata("http://localhost:3000/posts?_sort=Price&_order=desc")
    }else if(sortbyprice.value==="desc"){
        Fetchdata("http://localhost:3000/posts?_sort=Price&_order=asc")
    }else{
        Fetchdata("http://localhost:3000/posts")
    }
    
})
// -------------------------filter by color------------------------
filterbycolor.addEventListener("change",()=>{
    if(filterbycolor.value=="red"){
        Fetchdata("http://localhost:3000/posts?color=red&author=typicode")
    }
    else if(filterbycolor.value=="blue"){
        Fetchdata("http://localhost:3000/posts?color=blue&author=typicode")
    }
    else if(filterbycolor.value=="black"){
        Fetchdata("http://localhost:3000/posts?color=black&author=typicode")
    }
    else if(filterbycolor.value=="green"){
        Fetchdata("http://localhost:3000/posts?color=green&author=typicode")
    }
    else if(filterbycolor.value=="gold"){
        Fetchdata("http://localhost:3000/posts?color=gold&author=typicode")
    }
    else if(filterbycolor.value=="silver"){
        Fetchdata("http://localhost:3000/posts?color=silver&author=typicode")
    }else{
        Fetchdata("http://localhost:3000/posts")
    }
})
// ----------------------  display function-----------------------------
function display(data){
    products.innerHTML=null;
     data.forEach(e => {
        products.append(makecards(e.Image,e.name,e.Price))
        
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

