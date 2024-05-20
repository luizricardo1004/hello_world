let nomeUsuario = "";
let elemento = document.querySelector("#nome-usuario");

while(nomeUsuario == ""){
    if(nomeUsuario == "")
    nomeUsuario = prompt("Qua é o seu nome?");
}

if(nomeUsuario == null){
    elemento.textContent = "Seja muito bem-vindo(a)";
}else{
    elemento.textContent = nomeUsuario;
}