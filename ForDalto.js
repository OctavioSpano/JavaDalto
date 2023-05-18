//For
// for (let i = 0; i < 10; i++){

//     document.write(i + "<br>"); // el <br> es para generar un intro en cada renglon
// }

let animales = ["gato", "perro", "tortuga"]

for (animal in animales){ //el in muestra la posición de cada elemento (0, 1, 2)
    document.write(animal + "<br>");
}

document.write("<br>")

for (animal of animales){ //mientras tanto el of muestra el elemento en sí (gato, perro, tortuga)
    document.write(animal + "<br>");
}