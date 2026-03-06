const users = {
    "ihsen": "math123",
    "prof1": "classe2024",
    "prof2": "math2025"
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