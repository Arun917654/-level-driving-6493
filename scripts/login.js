function boom(){
    document.getElementById("signin").style.display = "none";
    document.getElementById("signup").style.display = "inline";
}
function boom1(){
    document.getElementById("signin").style.display = "inline";
    document.getElementById("signup").style.display = "none";
}
function submitdata(){
    var email  = document.getElementById("email").value;
    localStorage.setItem("email",email);

    var name  = document.getElementById("name").value;
    localStorage.setItem("name",name);

    var mobile  = document.getElementById("no").value;
    localStorage.setItem("mobile",mobile);

    var pass  = document.getElementById("pass").value;
    localStorage.setItem("pass",pass);
}

function checkdata(){
    var email_check  = document.getElementById("email_check").value;
    var email = localStorage.getItem("email");

    var pass_check  = document.getElementById("pass_check").value;
    var pass = localStorage.getItem("pass");
   
    if(email === email_check && pass === pass_check){
        document.getElementById("container").style.display = "none";
        alert("Login successful!");
        location.replace("index.html");
    }else{
        error.style.display = "block";
    }
}

