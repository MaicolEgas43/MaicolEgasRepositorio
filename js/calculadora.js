window.onload = function(){
    iniciarEventos();
}

// Utilizables para todas las operaciones
let operandoUno = 0;
let OperandoDos = 0;
let operacion="";


function iniciarEventos(){
    //Tomar todos los botones de número y les vas a adicionar un    // eventlistener al evento click
    let listaBotonerNumero = document.getElementsByClassName("btnNumero");

    for(let i=0; i<listaBotonerNumero.length; i++){
        //Adicionar un evento de tipo click
        listaBotonerNumero[i].addEventListener("click", escribirNumero);

        //console.log(listaBotonerNumero[i]);

    }
    console.log(listaBotonerNumero)

    // Tomar todos los elementos de operacion y le adicionamos un eventlistener
    // al event click
    let listaBotonesOperaciones = document.getElementsByClassName("btnOperacion");
    for(let i = 0; i<listaBotonesOperaciones.length; i++){
        listaBotonesOperaciones[i].addEventListener("click" , realizarOperacion)
    }

}

function escribirNumero(event){
    let numero = event.target.textContent;
    //console.log(event);
    document.getElementById("resultado" ).value += numero;
    //alert("soy un Numero");
}
function realizarOperacion(event){
    let operacionActual = event.target.textContent;
    if(operacionActual === "="){
        OperandoDos = document.getElementById("resultado").value;
        let resultado;

        //Evalua un valor de una variable y segun su valor ejecuta una acción 
        // Accion = Case 
        switch (operacion){
            case "+":
                resultado = parseFloat(operandoUno) + parseFloat(operandoDos);
                break;
            case "-":
                resultado = parseFloat(operandoUno) - parseFloat(operandoDos);
                break;
            case "*":
                resultado = parseFloat(operandoUno) * parseFloat(operandoDos);
                break;
            case "/":
                if(operandoDos === "0"){
                    resultado = "Division por cero";
                }
                else{
                    resultado = parseFloat(operandoUno) / parseFloat(operandoDos);
                }
                break;
        }
        document.getElementById("resultado").value = resultado;
        //resultado.toFixed(4)
    }else{
        operandoUno = document.getElementById("resultado").value;
        document.getElementById("resultado").value = "";
        operacion = operacionActual;
    }
}