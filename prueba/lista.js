resumenTareas();
mostrarLocal();
function agregarTarea(){
    var li = document.createElement("li");
    li.setAttribute("class", "elementosLista");

    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkBox");
    checkbox.setAttribute("onclick", "comprobarCheck(this), resumenTareas(), guardarEnLocal()");

    li.appendChild(checkbox);
    
    var texto = document.getElementById("textoTarea").value;
    var nodoTexto = document.createTextNode(texto);
    
    li.appendChild(nodoTexto);
    
    var botonCerrar = document.createElement("input");
    botonCerrar.setAttribute("type", "button");
    botonCerrar.setAttribute("onclick", "eliminarTarea(this), resumenTareas(), guardarEnLocal()");//this el propio botón
    botonCerrar.setAttribute("class", "botonCerrar");
    botonCerrar.style.display = "none";
    
    li.appendChild(botonCerrar);
    
    if (texto === '') {
        alert("Escriba la tarea");
      } else {
        document.getElementById("listaTareas").appendChild(li);
      }
      resumenTareas();
      guardarEnLocal();
}
//nodo es this(el propio botón)
function eliminarTarea(nodo){
   var elementoLista = nodo.parentElement;//el parent es li
   elementoLista.remove();

}

function comprobarCheck(check){
    var checkeado = check.checked;
    var elementoLista = check.parentElement;//seria el li
    elementoLista.setAttribute("class", "listaCheckeada");
    var botonCerrar = elementoLista.querySelector('.botonCerrar');//cogemos el hijo el k sea boton cerrar por eso le hemos puesto la class botonCerrar
    if (checkeado){    
        botonCerrar.style.display = "block";
    }
    else{
        botonCerrar.style.display = "none";
    }

}
function resumenTareas(){
    var tareaTerminada=0;
    var tareaPendiente=0;
    var textoResumenTareas = document.getElementById("textoResumenTareas");
    textoResumenTareas.innerHTML="";
    var checkboxes = document.getElementsByClassName("checkBox");
    for (let item of checkboxes) {
        if(item.checked){
            tareaTerminada= tareaTerminada + 1;
        }
        else{
            tareaPendiente= tareaPendiente + 1;
        }
    }

    var texto = "Tareas pendientes" + " " + tareaPendiente + " " + " y tareas terminadas " + tareaTerminada;
    var textoResumen = document.createTextNode(texto);

    textoResumenTareas.appendChild(textoResumen);

}

function guardarEnLocal(){
    var elementosLista = document.getElementsByClassName("elementosLista");
    localStorage.setItem("elementos", elementosLista);
}
function mostrarLocal(){
    var elementos = localStorage.getItem("elementos");
    var lista = document.getElementById("listaTareas");
    for (let item of elementos) {
        console.log(item);
    }
}