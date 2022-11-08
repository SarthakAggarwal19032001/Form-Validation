window.addEventListener("load", initEvents);
var  textBox;
var textBox2;
var passwordBox;       
var confirmPsw;
var checkEml;          
var submitBtn;                                                                                       
function initEvents() {
    textBox = document.querySelector(".box");
    //blur -when focus gets removed
    textBox.addEventListener("blur", validateUsername);
    
     textBox2 = document.querySelector(".box-2");
    textBox2.addEventListener("blur", checkUsername);

    passwordBox = document.querySelector(".box-3");
    passwordBox.addEventListener("keyup", checkPassword);

     confirmPsw=document.querySelector(".box-4");
    confirmPsw.addEventListener("keyup", confirmPassword);

    checkEml=document.querySelector(".box-22");
    checkEml.addEventListener("blur",checkEmail);

    submitBtn=document.querySelector(".submit");
    submitBtn.addEventListener("click",validateAll);
}

function validateUsername() {
    // console.log("Blur Event Triggered...");
    let username = this.value;
    let spanBox = document.querySelector(".err");
    if(username == "") {
        this.style.border = "1px solid red";
        spanBox.innerHTML = "Please enter your name";
    }
    else {
        this.style.border = "1px solid green";
        spanBox.innerHTML = "";
    }
}

function checkUsername() {
    let name=this.value;
    let span=document.querySelector(".err-11");
    let pattern=/^[a-z]+\.[a-z]/;
    if(!name.match(pattern)){
        span.innerHTML="Invalid UserName";
        this.style.border = "1px solid red";
    }
    else{
        span.innerHTML="";
        this.style.border = "1px solid green";
    }
}

function checkPassword() {
    let pwd = this.value;
    let span = document.querySelector('.err-2');
    if(pwd.length > 0 && pwd.length < 5) {
        this.style.border = "1px solid red";
        span.innerHTML = "Weak Password...";
    }
    else if(pwd.length >= 5 && pwd.length < 8) {
        this.style.border = "1px solid red";
        span.innerHTML = "Average Password";
    }
    else {
        this.style.border = "1px solid green";
        span.innerHTML = "Strong Password";
    }

    if(pwd.length == 0) {
        span.innerHTML = "Please fill this field...";
    }
}


function confirmPassword() {
    let pwd = this.value;
    let span = document.querySelector('.err-3');
    if(pwd!=passwordBox.value) {
        this.style.border = "1px solid red";
        span.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    }
    else{
        this.style.border = "1px solid green";
        span.innerHTML = "<i class='fa-solid fa-check'></i>" ; 
    }
    if(pwd.length == 0) {
        span.innerHTML = "Please fill this field...";
    }
}

function checkEmail(){
    let email=this.value;
    let span=document.querySelector(".err-1");
    let pattern=/^[a-z0-9]+@[a-z]+\.(com|in)$/;
    if(!email.match(pattern)){
        this.style.border = "1px solid red";
        span.innerHTML="Invalid Email Id";
    }
    else{
        this.style.border = "1px solid green";
        span.innerHTML="";
    }
    
}

function validateAll(){
    let name=document.querySelector(".err");
    let email=document.querySelector(".err-1");
    let username=document.querySelector(".err-11");
    let psw=document.querySelector(".err-2");
    let confirmpsw=document.querySelector(".err-3");
    if(!name.innerHTML==""){
        document.getElementById("img-1").style.display="inline";
        name.innerHTML="";
    }
    if(!email.innerHTML==""){
        document.getElementById("img-2").style.display="inline";
        email.innerHTML="";
    }
    if(!username.innerHTML==""){
        document.getElementById("img-3").style.display="inline";
        username.innerHTML="";
    }
    if(!psw.innerHTML==""){
        document.getElementById("img-4").style.display="inline";
        psw.innerHTML="";
    }
    if(!confirmpsw.innerHTML==""){
        document.getElementById("img-5").style.display="inline";
        confirmpsw.innerHTML="";
    }

}