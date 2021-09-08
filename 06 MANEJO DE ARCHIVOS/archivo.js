const fs = require("fs");

class Archivo {
    constructor(nombre_archivo) {
        this.nombre_archivo = nombre_archivo;
    }

    async leer() {
        try {
            const archivo = await fs.promises.readFile(
                `./${this.nombre_archivo}`,
                "utf-8"
            );
            console;
            console.log(JSON.parse(archivo));
            console.log("ARCHIVO LEIDO");
            return JSON.parse(archivo);
        } catch (err) {
            console.log("NO SE PUDO LEER EL ARCHIVO");
            return [];
        }
    }

    async guardar(nombre_producto, precio, url_foto) {
        try {
            let productos = await this.leer();
            productos.push({
                title: nombre_producto,
                price: precio,
                thumbnail: url_foto,
                id: productos.length + 1,
            });
            await fs.promises.writeFile(
                `./${this.nombre_archivo}`,
                JSON.stringify(productos),
                "utf-8"
            );
            console.log("PRODUCTO NUEVO GUARDADO.");
        } catch {
            console.log("NO SE PUDO GUARDAR EL ARCHIVO");
        }
        // fs.writeFileSync(`./${this.nombre_archivo}`,
        // 		JSON.stringify(productos, null, "\t")
        // 	);

        // try {
        //     let archivo = await fs.promises.readFile(
        //         `./${this.nombre_archivo}`
        //     );
        //     let arrayArchivo = JSON.parse(archivo);
        //     let productoNuevo = {
        //         title: nombre_producto,
        //         price: precio,
        //         thumbnail: url_foto,
        //         id: arrayArchivo.length + 1,
        //     };
        //     arrayArchivo.push(productoNuevo);
        //     fs.writeFileSync(
        //         `./${this.nombre_archivo}`,
        //         JSON.stringify(arrayArchivo, null, "\t")
        //     );
        //     console.log("ARCHIVO GUARDADO");
    }

    borrar() {
        fs.unlink(`./${this.nombre_archivo}`, (error) => {
            if (error) {
                console.log(`NO SE PUDO BORRAR ${this.nombre_archivo}`);
            } else {
                console.log("ARCHIVO BORRADO.");
            }
        });
    }

    async borrar2() {
        try {
            await fs.promises.unlink(`./${this.nombre_archivo}`);
            console.log("ARCHIVO BORRADO.");
        } catch {
            console.log(`NO SE PUDO BORRAR ${this.nombre_archivo}`);
        }
    }

    borrar3() {
        fs.unlinkSync(`./${this.nombre_archivo}`);
    }
}

const arrayProductos = [
    {
        title: "Escuadra",
        price: 123.45,
        thumbnail:
            "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
        id: 1,
    },
    {
        title: "Calculadora",
        price: 234.56,
        thumbnail:
            "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
        id: 2,
    },
    {
        title: "Globo Terráqueo",
        price: 345.67,
        thumbnail:
            "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
        id: 3,
    },
];

fs.writeFile("./productos.txt", JSON.stringify(arrayProductos), (error) => {
	if (error) {
		console.log("NO SE CREEO EL ARCHIVO");
	} else {
		console.log("ARCHIVO CREADO");
	}
});

const archivo = new Archivo("productos.txt");
//archivo.leer();

setTimeout(()=>archivo.guardar("TV", 520, "URL DE LA FOTO DE LA TV"),1000);
setTimeout(()=>archivo.guardar("MESA", 1000, "URL FOTO MESA"),2000);
setTimeout(()=>archivo.guardar("PERRO", 1, "URL FOTO DE PERRO"),3000);
setTimeout(()=>archivo.leer(),4000);
setTimeout(()=>archivo.borrar(),8000);



// Aspectos a incluir en el entregable:
//La función guardar incorporará al producto un id, el cual se obtendrá de la longitud total del array actual más 1.
//Con el método leer se mostrará en consola el listado total (si el archivo existe) como un array de productos. Si el archivo no existe, se retornará un array vacío.
//El método borrar elimina el archivo completo.
//Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async await y manejo de errores.
