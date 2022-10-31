
class Usuario {
   constructor(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros =[];
    this.mascotas = [];

   }

}

const usuario1 = new Usuario("Jose", "Hadyar")
const usuario2 = new Usuario("Carlos", "Hadyar")

console.log(usuario1, usuario2)