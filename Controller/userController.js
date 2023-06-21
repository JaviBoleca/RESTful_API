const express = require("express");
const router = express.Router();

//Get obtener todos los usuarios

router.get("/", (req, res) => {res.send("get all users")

})
//obtener un unico usuario
router.get("/:id", (req, res) => {res.send('get one user ${req.params.id}')})

//crear un usuario
router.post("/", (req, res) => { console.log(req.body), res.send('post one user ${req.body.name}')})

//eliminar un usuario
router.delete("/:id", (req, res) => {res.send('delete one user ${req.params.id}')})

//Actualizar un usuario
router.patch("/:id", (req, res) => {res.send('patch one user ${req.params.id}')})

module.exports = router;