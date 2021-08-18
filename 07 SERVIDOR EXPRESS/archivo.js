const fs = require("fs");

class Archivo {
    constructor(nombre_archivo) {
        this.nombre_archivo = nombre_archivo;
    }

    async leer() {
        try {
            const archivo = await fs.promises.readFile(
                `./${this.nombre_archivo}`
            );
            console.log(JSON.parse(archivo));
            console.log("ARCHIVO LEIDO");
        } catch (err) {
            console.log("NO SE PUDO LEER EL ARCHIVO");
            return [];
        }
    }

    async guardar(nombre_producto, precio, url_foto) {
        try {
            let archivo = await fs.promises.readFile(
                `./${this.nombre_archivo}`
            );
            let arrayArchivo = JSON.parse(archivo);
            let productoNuevo = {
                title: nombre_producto,
                price: precio,
                thumbnail: url_foto,
                id: arrayArchivo.length + 1,
            };
            arrayArchivo.push(productoNuevo);
            fs.writeFileSync(
                `./${this.nombre_archivo}`,
                JSON.stringify(arrayArchivo, null, "\t")
            );
            console.log("ARCHIVO GUARDADO");
        } catch {
            console.log("NO SE PUDO GUARDAR EL ARCHIVO");
        }
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
            await fs.unlink(`./${this.nombre_archivo}`);
            console.log("archivo borrado.");
        } catch {
            console.log(`NO SE PUDO BORRAR ${this.nombre_archivo}`);
        }
    }

	borrar3() {
		fs.unlinkSync(`./${this.nombre_archivo}`)
	}
}

