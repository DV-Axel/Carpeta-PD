const express = require("express") //traigo el modulo de express
const router = express.Router()
const path = require("path")

router.use("/", express.static(path.join(__dirname, "../../public")))

 router.get("/*", (req, res) => {
     res.sendFile(path.join(path.join(__dirname,"../../public"))) //la carpeta raiz seria api.js; sendFile para mostrar una pagina
     
     //res.send("<h1>estoy</h1>") prueba solo etiqueta anda
 })

module.exports={
    router
}
