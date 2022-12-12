var basedatos = []

var cargarDatos = function(){
    var misdatos = localStorage.getItem("base")
    if(misdatos == null){
        basedatos = []
    }
    else{
        basedatos = JSON.parse(misdatos)
    }
}

var IniciarSesion = function(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    var posicion = basedatos.findIndex((item) => item.mail == email && item.pass == password)
    console.log(posicion)

    var msj = document.getElementById('mensaje')
    if(posicion == -1){
        msj.innerHTML = "<div class='alert-danger' role='alert'> Credenciales incorrectas </div>"
    }
    else{
        msj.innerHTML = "<div class='alert-success' role='alert'> Bienvenid@ "+ basedatos[posicion].name +" </div>"
    }
}

cargarDatos()