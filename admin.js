
let name=document.getElementById("name");
let image=document.getElementById("image");
let description=document.getElementById("description");
let price=document.getElementById("price");
let addatabutton=document.getElementById("addProducts");
let tbody=document.querySelector("tbody");
let color=document.getElementById("Color")
let Category=document.getElementById("category")
async function fetchdata(){

    let res=await fetch("http://localhost:3000/posts")
    let data=await res.json()
    console.log(data)
    data.forEach(e => {
        
       tbody.append( append(e.Image,e.Price,e.Category,e.description,e.color,e.name,e.id))
    });
}
fetchdata()

addatabutton.addEventListener("click",()=>{
    
    let data={
        name:name.value,
        Image:image.value,
        Price:price.value,
        color:color.value,
        Category:Category.value,
        description:description.value
    }
    addata(data)
})

async function addata(x){

    let res=await fetch("http://localhost:3000/posts",{
        method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(x)
    })
    let data=await res.json()
    console.log(data)
}


function append(Image,Price,Category,description,color,name,id){
    
    let tr=document.createElement("tr");
    tr.setAttribute("data-id",id)
    let name1=document.createElement("td")
    let price1=document.createElement("td");
    let Category1=document.createElement("td");
    let image1=document.createElement("img");
  
    let prodescription=document.createElement("td")
    let procolor=document.createElement("td")
    prodescription.innerText=description
    image1.className="image";
    name1.innerText=name
    price1.innerText=Price;
    procolor.innerText=color
    Category1.innerText=Category;
    image1.src=Image;
    // let edit=document.createElement("button")
    let remove=document.createElement("button")
    remove.innerText="❌";
    // edit.innerText="✏️";
    
   
//     edit.addEventListener("click",()=>{
        
//       name1.contentEditable=true;
      
      
//       let data={
//         name:name.innerText,
//         image:image.innerText,
//         title:title.innerText,
//         price:price.innerText,

//     }
//    console.log(data)
//     //    edit1(id,data);
        
//     }) 
   
    remove.addEventListener("click",()=>{
        deleteitem(id)
    })
    tr.append(image1,name1,price1,Category1,prodescription,procolor,remove)
     return tr
    
}

 function deleteitem(id){
    fetch(`http://localhost:3000/posts/${id}`,{
        method:"DELETE",
        headers:{ "Content-Type":"application/json"}
    })
}


async function edit1(id,data1){
   let res=await fetch(`http://localhost:3000/posts/${id}`,{
        method:"PATCH",
        headers:{ "Content-Type":"application/json"},
        body:JSON.stringify(data1)

    })
    let data=await res.json()
    console.log(data)
}
