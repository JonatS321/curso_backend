export class Productos {
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
        this.arrayProductos.splice(idElegido, 1);
        return productoBorrado;
    }

    actualizarProducto(idProducto, modificaciones) {
        this.arrayProductos[idProducto].titulo = modificaciones.titulo;
        this.arrayProductos[idProducto].precio = modificaciones.precio;
        this.arrayProductos[idProducto].thumbnail = modificaciones.thumbnail;
        return this.arrayProductos[idProducto];
    }
}

// module.exports { Productos}