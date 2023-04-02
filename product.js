let products=document.getElementById("products");
let buttons=document.getElementById("buttons")
let rangebtn=document.getElementById("range");
let sortbyprice=document.querySelector(".select-by-price")
let filterbycolor=document.getElementById("Color")
let addtocartbutton=document.getElementsByName("addtocart");
// Fetch & render users
c=[];
let arun = JSON.parse(localStorage.getItem("id"))||[];

async function  Fetchdata(url){
try {
    let res=await  fetch(url);
    let data=await res.json()
   
   display(data)
} catch (error) {
    console.log(error)
}

}Fetchdata(`http://localhost:3000/posts?_page=${1}&_limit=${10}`)
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
        Fetchdata("http://localhost:3000/posts?_sort=Price&_order=asc")
    }else if(sortbyprice.value==="desc"){
        Fetchdata("http://localhost:3000/posts?_sort=Price&_order=desc")
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
    }
    else if(filterbycolor.value=="pink"){
        Fetchdata("http://localhost:3000/posts?color=pink&author=typicode")
    }else{
        Fetchdata("http://localhost:3000/posts")
    }
})
// ----------------------  display function-----------------------------
function display(data){
    products.innerHTML=null;
     data.forEach(e => {
        products.append(makecards(e.Image,e.name,e.Price,e.description,e.id))
        
    });
}
function makecards(image,name,price,description,id){
  let card=document.createElement("div");
  card.className="cards";
  let imagediv=document.createElement("div");
  imagediv.id="imagediv"
  let img=document.createElement("img");
  img.src=image;
imagediv.append(img)
  let productname=document.createElement("p");
  productname.innerText=name;
let prodesc=document.createElement("p");
prodesc.innerText=description;
  let productprice=document.createElement("p");
  productprice.innerText=price;
  
  let addtocart=document.createElement("button");
  addtocart.innerText="Add To Cart";
  addtocart.className="addtocart";
 
  card.append(imagediv,productname,productprice,prodesc,addtocart);
 addtocart.addEventListener("click",()=>{
    let cdata={
        "image":image,
        "name":name,
        "price":price,
        "description":description.value,
        "id":id

    }
    c.push(cdata)
    localStorage.setItem("cart",JSON.stringify(c))

    
  })
  return card
}

 


// -------------------------------------

var timeOut = 0;
var slideIndex = 0;
var autoOn = true;

var dots = document.querySelectorAll('.dot');
var prevArrow = document.querySelector('.prev');
var showArrow = document.querySelector('.next');

autoSlides();

function autoSlides() {
    timeOut = timeOut - 20;
    if (autoOn == true && timeOut < 0) {
        showSlides();
    }
    setTimeout(autoSlides, 20);
}

function prevSlide() {

    timeOut = 5000;

    var slides = document.querySelectorAll(".slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex--;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    if (slideIndex == 0) {
        slideIndex = 3
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlides() {

    timeOut = 1700;

    var slides = document.querySelectorAll(".slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

prevArrow.addEventListener('click', ()=> {
    prevSlide();
})

showArrow.addEventListener('click', ()=> {
    showSlides();
})




function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }


  function  createbutton(){
    let btndiv=document.getElementById("buttons");

    for(let i=1;i<=5;i++){
       let btn=document.createElement("button");
       btn.innerText=i;

       btn.addEventListener("click",()=>{
            Fetchdata(`http://localhost:3000/posts?_page=${i}&_limit=${10}`)
       })
       btndiv.append(btn)
    }
  }
  createbutton()

 