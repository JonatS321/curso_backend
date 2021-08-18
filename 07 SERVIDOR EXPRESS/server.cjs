
const fs = require("fs");
const express = require("express");

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor iniciado ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en el server${error}`));

let visitasItems = 0;
app.get("/items", (req, res) => {
    ++visitasItems;
    let items = fs.readFile("./productos.txt", "utf8", (err, data) => {
        if (err) {
            console.log("NO SE PUDO LEER ARCHIVO");
            return
        }
        res.send({ productos: JSON.parse(data), cantidad: JSON.parse(data).length })
    })
});

let visitasItemRandom = 0;
app.get("/item-random", (req, res) => {
    let items = JSON.parse(fs.readFileSync("./productos.txt", "utf8"))
    res.send(items[Math.floor(Math.random() * (items.length - 0)) + 0
    ])
    ++visitasItemRandom;
    console.log("REQUEST RECIBIDO");
});

app.get("/visitas", (req, res) => {
    let visitas = {
        visitas: { items: visitasItems, item: visitasItemRandom },
    };
    console.log("REQUEST RECIBIDO");
    res.send(visitas);
});
