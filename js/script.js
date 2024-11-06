 // Aquí tu código
const lista=document.getElementById("lista");
const agregar=document.getElementById("agregar")
agregar.addEventListener("click", function(){
    let addLista=prompt("Escribe el elemento que quieres añadir a la lista");
    if (addLista){
        let newElemento=document.createElement("li")
        newElemento.textContent=addLista;
        lista.appendChild(newElemento); 
    }else{
        alert("No has introducido ningun elemento a la lista")
    }
});
