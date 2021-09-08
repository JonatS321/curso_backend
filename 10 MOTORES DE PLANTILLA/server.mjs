import express from "express";
import multer from "multer";
import handlebars from "express-handlebars";
import path from "path";
// import { Productos } from "./helper.js";

const __dirname = path.resolve();
const port = 8080;
const app = express();
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//
const server = app.listen(port, () =>
    console.log(`SERVIDOR ANDANDO EN PUERTO ${port}`)
);

server.on("error", (error) => console.error(error));

const router = express.Router();
app.use(express.static("public"));
app.use("/api", router);

router.get("/", (request, response) => {
    response.sendFile(`${__dirname}/public/index.html`);
});

const ENGINE_NAME = "abc";
app.engine(ENGINE_NAME, handlebars({
    extname: ".abc",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    defaulLayout: "index.abc",
}));
app.set("views", "./views");
app.set("view engine", ENGINE_NAME);

router.get("/productos/vista", (request, response) => {
    response.render("productos.abc",{
        hayProductos: productos.arrayProductos.length > 0 ,
        listaDeProductos: productos.listarProductos(),
        noHayProductos: productos.arrayProductos.length == 0,
    })
})

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, "uploads");
    },
    filename: (request, file, callback) => {
        callback(null, `${file.fieldname}-${Date.now()}`);
    },
})

router.get("/productos/listar", (request, response) => {
    let resultado = productos.listarProductos();
    if (resultado.length > 0) {
        response.status(200).send(resultado);
    } else {
        response.status(404).send({ error: "No hay productos cargados" });
    }
});

router.get("/productos/listar/:id", (request, response) => {
    let resultado = productos.listarProductos();
    if (
        resultado.length > 0 &&
        resultado.filter((producto) => producto.id == request.params.id)
            .length == 1
    ) {
        response
            .status(200)
            .send(productos.listarProductoPorId(request.params.id));
    } else {
        response.status(404).send({ error: "Producto no encontrado" });
    }
});

router.post("/productos/guardar", (request, response) => {
    let producto = request.body;
    console.log(producto);
    if (producto.precio && producto.titulo && producto.thumbnail) {
        productos.agregarProducto(producto);
        response.status(200).send(producto);
    }
});

router.post("/productos/actualizar/:id", (require, response) => {
    let idProducto = require.params.id;
    let objetoModificaciones = require.body;
    console.log(idProducto);
    console.log(objetoModificaciones);
    if (
        objetoModificaciones.precio &&
        objetoModificaciones.titulo &&
        objetoModificaciones.thumbnail
    ) {
        let productoActualizado = productos.actualizarProducto(
            idProducto,
            objetoModificaciones
        );
        response.status(200).send(productoActualizado);
    } else {
        response
            .status(404)
            .send({ error: "Le faltan parametros a la actualizacion" });
    }
});

router.delete("/productos/borrar/:id", (request, response) => {
    let idProducto = request.params.id;
    if (productos.listarProductoPorId(idProducto)) {
        response.status(200).send(productos.borrarProducto(idProducto));
    } else {
        response.status(404).send({ error: "PRODUCTO INEXISTENTE" });
    }
});

// router.put("/:id", (request, response) => {
// 	response.send({
// 		paramUrl: request.params.id,
// 		paramBody: request.body.algo,
// 	})
// })

app.delete("/api");

class Productos {
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

    borrarProducto(idElegido) {
        let productoBorrado = this.listarProductoPorId(idElegido);
        let index = this.arrayProductos.indexOf(productoBorrado)
        this.arrayProductos.splice(index, 1);
        return productoBorrado;
    }

    actualizarProducto(idProducto, modificaciones) {
        // this.arrayProductos[idProducto].titulo = modificaciones.titulo;
        // this.arrayProductos[idProducto].precio = modificaciones.precio;
        // this.arrayProductos[idProducto].thumbnail = modificaciones.thumbnail;
        return this.arrayProductos[idProducto] = { ...modificaciones, id: idProducto };
    }
}

const productos = new Productos();

productos.agregarProducto({
    titulo: "CIERVO",
    precio: "555",
    thumbnail: "1https://cdn4.iconfinder.com/data/icons/zoo-line-welcome-to-zootopia/512/deer-512.png",
});
