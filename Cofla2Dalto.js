//Ej: Hay una fiesta y solo pueden pasar los mayores de 18 y la persona que entra primero 
//justo despues de las 2AM pasa gratis

let free = false
const validarCliente=(time) =>{
    let edad = prompt("¿Cuál es tu edad?")
    if(edad > 18){
        if (time >= 2 && time < 7 && !free){
            alert("Podés pasar gratis ya que sos la primera persona en pasar antes de las 2:00 AM")
            free = true
        }    
        else{
        alert("Podes pasar, pero tenes que pagar, porque son las "+ time + "hs y no sos el primero en pasar despues de las 2:00 AM")
        }
    }
    else {
        alert("No podes pasar, no tenes la edad suficiente")
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(2);
validarCliente(3);