const express = require("express")
const api=express();
const router = express.Router()

const host = "localhost"
const port = 3999

api.listen(port, host, () => {
    console.log("ok cambio")
})