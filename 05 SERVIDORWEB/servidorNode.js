var http = require("http");

var server = http.createServer(function (peticion, respuesta) {
	let objeto = {
		id: Math.random() * (10 - 1) + 1,
		title: "Producto " + Math.random() * (10 - 1) + 1,
		price: Math.random() * (9999.99 - 0.0) + 0.0,
		thumbnail: "Foto " + Math.random() * (10 - 1) + 1,
	}
    respuesta.end(
        JSON.stringify(objeto)
    );
});

server.listen(3000, function () {
    console.log("SERVER ANDANDO");
});

// https://servidor-nodejs.glitch.me/