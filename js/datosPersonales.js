window.onload = function(){
    iniciarEventos();
    cargarDatosStorage();

}
// Adicionar eventos 
function iniciarEventos(){
    document.getElementById("btnguardar").addEventListener("click", guardarDatos);
    document.getElementById


}

function cargarDatosStorage(){
    // CARGAR EL STORAGE
    let datoStorage = localStorage.getItem("datosPersonales");
    
    // Validar si existen datos en el storage
    if(datoStorage){
        datosStorage = JSON.parse(datoStorage);

    }
    else{

        datosStorage = [];
    }
    datosStorage.forEach( datos => {
        
    });
}
function guardarDatos (event){
    let nombres = document.getElementById("nombres" ).value;
    let apellidos = document-getElementById("apellidos").value;
    let edad = document-getElementById("edad").value;
    let fechaNacimiento = document-getElementById("fechaNacimiento").value;
    let estadoCivil = document.querySelector("#estadoCivil option:checked").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;

    let datosPersonales = {
        "nombres" :nombres,
        "apellidos":apellidos,
        "edad":edad,
        "telefono":telefono,
        "fechaNacimiento":fechaNacimiento,
        "estadoCivil": estadoCivil,
        "direccion":direccion
    }
    

    // Crear storage 
    let datosStorage = localStorage.getItem("datosPersonales");
    if(datosStorage){
        datosStorage = JSON.parse(datosStorage);
    }else{
        datosStorage = [];
    }
    datosStorage.push(datosPersonales);
    localStorage.setItem("datosPersonales", JSON.stringify(datosStorage))
    let tabla = document.getElementById("datosTabla");

    let html = "";
    html += "<tr>";
    html += "    <td>" + nombres + "</td>";
    html += "    <td>" + apellidos + "</td>";
    html += "    <td>" + edad + "</td>";
    html += "    <td>" + fechaNacimiento + "</td>";
    html += "    <td>" + estadoCivil + "</td>";
    html += "    <td>" + telefono + "</td>";
    html += "    <td>" + direccion + "</td>";
    html += "    <td>";
    htm
    html += "</tr>";

    tabla.tBodies[0].innerHTML += html;


}

