function botonGuardar (){

    let nombreEl = document.getElementById("nombres");
    let apellidosEl = document.getElementById("apellido");
    let contrasenaEl = document.getElementById("contrasena")

    nombreEl = classList.add("")


    
    let nombre = nombreEl.value ;
    let apellidos = apellidosEl.value;
    let contrasena = contrasenaEl.value;

    // Mensajes en la consola

    if(nombre === "" || nombre.length < 6 ){
        alert("Digite por favor el nombre")
        document.getElementById("nombre").classList.add("error");
    }
    if(apellidos === ""){
        alert("Digite por favor los apellidos");
        document.getElementById("nombre").classList.add("error");

    }
    if (contrasena === ""){
        alert("Digite por favor la contraseña");
        document.getElementById("nombre").classList.add("error");
    }
    

    if(nombre !== "" && apellidos !== "" && contrasena!== ""){
        //alert("tus datos estan correctos")
        let datospersonale = {
            nombre: nombre,
            apellidos: apellidos,
            contrasena: contrasena

        }
        console.log(datospersonale)
    }
    
    console.log(nombre,apellidos);
}