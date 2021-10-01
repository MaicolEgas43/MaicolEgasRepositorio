function botonGuardar (){
    // Mensajes en la consola
    let nombre = document.getElementById("nombres").value ;
    let apellidos = document.getElementById("apellidos").value;
    let contrasena = document.getElementById("contrasena").value;

    if(nombre === ""){
        alert("Digite por favor el nombre")
    }
    if(apellidos === ""){
        alert("Digite por favor los apellidos")

    }
    if (contrasena === ""){
        alert("Digite por favor la contraseña")
    }
    

    if(nombre !== "" && apellidos !== "" && contrasena!== ""){
        alert("tus datos estan correctos")
    }
    console.log(nombre,apellidos);
}