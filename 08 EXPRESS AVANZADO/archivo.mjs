import express, { response } from "express";

const port = 8080;
const app = express();
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//
const server = app.listen(port, () =>
    console.log(`Server listen on port ${port}`)
);
server.on("error", (error) => console.error(error));

class Memoria {
    constructor() {
        this.arrayProductos = [];
        this.contador = 0;
    }

    listarProductos() {
        return this.arrayProductos;
    }

    listarProductoPorId(idPedido) {
        return this.arrayProductos.find((producto) => producto.id == idPedido);
    }

    agregarProducto(productoNuevo) {
        this.arrayProductos.push({ ...productoNuevo, id: this.contador });
        this.contador += 1;
        return productoNuevo;
    }
}

const memoria = new Memoria();

memoria.agregarProducto({
    titulo: "PATO NUEVO",
    precio: "123",
    thumbnail: "ads.html",
});

app.get("/api/productos/listar", (request, response) => {
    let resultado = memoria.listarProductos();
    if (resultado.length > 0) {
        response.status(200).send(resultado);
    } else {
        response.status(404).send({ error: "No hay productos cargados" });
    }
});

app.get("/api/productos/listar/:id", (request, response) => {
    let resultado = memoria.listarProductos();
    if (resultado.length > 0 && resultado.filter(producto => producto.id == request.params.id).length == 1) {
        response
            .status(200)
            .send(memoria.listarProductoPorId(request.params.id));
    } else {
        response.status(404).send({ error: "Producto no encontrado" });
    }
});

app.post("/api/productos/guardar", (require, response) => {
    let producto = require.body;
    if (producto.precio && producto.titulo && producto.thumbnail) {
        memoria.agregarProducto(producto);
        response.status(200).send(producto);
    }
});

// app.put("/api/:id", (request, response) => {
// 	response.send({
// 		paramUrl: request.params.id,
// 		paramBody: request.body.algo,
// 	})
// })

app.delete("/api");
