let input = document.querySelectorAll("input");
let btnhistorial = 0;

function agregarAPantalla(numero) {
    input[0].value += numero;
}



function ejecutar() {
    input[0].value = eval(input[0].value);
}

function borrar() {
    let datos = input[0].value;
    input[0].value = datos.substring(0, datos.length - 1);
}

function historial() {
let dato = document.querySelector("#menuhistorial").style.display.input;

    if (btnhistorial==1) {
        document.querySelector("#menuhistorial").style.display = 'none';
        btnhistorial=0;
    }else{
       document.querySelector("#menuhistorial").style.display = 'block';
        btnhistorial=1;
    }
}

function crearInputHistorial(){
const container = document.querySelector("#menuhistorial");

const boton = document.createElement("input");
boton.value = input[0].value;
boton.type = 'button';
boton.className = 'btn';
boton.onclick=function devolverAPantalla(){
    input[0].value += boton.value;
};
container.appendChild(boton);
}


function llamarAlIgual(){
    crearInputHistorial();
    ejecutar();
}