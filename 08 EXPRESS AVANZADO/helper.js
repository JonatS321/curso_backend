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