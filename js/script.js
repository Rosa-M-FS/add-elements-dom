 // Aquí tu código
const lista=document.getElementById("lista");
const agregar=document.getElementById("agregar")
agregar.addEventListener("click", function(){
    let addLista=prompt("Escribe el elemento que quieres añadir a la lista");
    let newElemento=document.createElement("li")
    newElemento.textContent=addLista;
    lista.appendChild(newElemento);
});
