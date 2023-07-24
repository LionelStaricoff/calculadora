let input = document.querySelectorAll("input");

function agregarAPantalla(numero){
    input[0].value += numero;
}



function ejecutar(){
    input[0].value =eval(input[0].value);
}


