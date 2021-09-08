class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(nombre_mascota) {
        this.mascotas.push(nombre_mascota);
    }

    getMascotas() {
        return this.mascotas.length;
    }

    addBook(book, autor) {
        this.libros.push({ nombre: book, autor: autor });
    }

    getBooks() {
        return this.libros.map((libro) => libro.nombre);
    }
}

let pepe = new Usuario(
    "Juan",
    "Perez",
    [
        { nombre: "El señor de las moscas", autor: "William Golding" },
        { nombre: "Fundacion", autor: "Isaac Asimov" },
    ],
    ["Perro", "Gato"]
);
console.log(pepe.getFullName());
console.log(pepe.getMascotas());
console.log(pepe.getBooks());
