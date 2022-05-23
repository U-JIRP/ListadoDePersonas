const arregloPersonas = [];


function mostrarPersonas() {
    let texto = "";

    if(arregloPersonas.length > 0){
        for (const iterator of arregloPersonas) {
            console.log(iterator);
            texto += `<li>${iterator._nombre} ${iterator._apellido}</li>`;
        }
    
        document.getElementById("personas").innerHTML = texto;
    }
    else{
        alert("No se tienen registros");
    }
    
}

function agregarPersona() {
    let formulario = document.getElementById("formulario");
    let nombre = formulario["nombre"].value;
    let apellido = formulario["apellido"].value;
    if(nombre != "" && apellido != ""){
        const persona = new Persona(nombre, apellido);
        arregloPersonas.push(persona);
        mostrarPersonas();
    }
    else{
        alert("Los campos nombre y apellido no pueden estar vacíos");
    }
}

   