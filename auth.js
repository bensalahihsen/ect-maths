const users = {
    "ihsen": "math123",
    "asma": "math123",
    "souhaib": "math123"
};

function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(users[user] && users[user] === pass){

localStorage.setItem("logged","true");

window.location.href="index.html";

}
else{

document.getElementById("error").innerText="Utilisateur ou mot de passe incorrect";

}

}