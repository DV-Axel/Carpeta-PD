const express = require("express")
const api=express();
const router = express.Router()
const path=require("path") //uso path para manejar mejor las rutas
const host = "localhost"
const port = 3999

api.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,("./public/asd.html"))) //la carpeta raiz seria api.js; sendFile para mostrar una pagina
})


api.listen(port, host, () => {
    console.log("ok cambio")
    console.log(`${host}:${port}`)
})