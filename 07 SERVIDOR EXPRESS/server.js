import { Archivo } from "../06 MANEJO DE ARCHIVOS/archivo";
const fs = require("fs");
const express = require("express");

const app = express();

const PORT = 8080;

const server = app.listen(port, () => {
    console.log(`Servidor iniciado ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en el server${error}`));

let visitasItems = 0;
app.get("/items", (req, res) => {
    const productos = new Archivo("productos.txt");
    ++visitasItems;
    console.log("REQUEST RECIBIDO");
});

let visitasItemsRandom = 0;
app.get("/items-random", (req, res) => {
    let itemRandom = "";
    ++visitasItemsRandom;
    console.log("REQUEST RECIBIDO");
    res.json;
});

app.get("/visitas", (req, res) => {
    let visitas = {
        visitas: { items: visitasItems, item: visitasItemsRandom },
    };
    console.log("REQUEST RECIBIDO");
    res.json(visitas);
});
