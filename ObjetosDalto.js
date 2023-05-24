
//Los objetos son una clase con distintos atributos

class animal{
    constructor(especie, edad, color){
        this.esp = especie
        this.age = edad
        this.color = color
        this.info = "Soy " + this.esp + ", tengo " + this.age + " años, y soy de color " + this.color;
    }
}
//Para los objetos es conveniente usar cosnt y no let
const perro = new animal("perro", 5, "azul") 
document.write (perro.esp)