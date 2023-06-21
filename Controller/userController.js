const express = require("express");
const router = express.Router();
//importar el modelo userModel
const User = require("../Model/userModel");

router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json({ status: "success", data, error: null });
  } catch (error) {
    res.status(404).json({ status: "fail", data: null, error: error.message });
  }
});

// Obtener todos los usuarios
router.get("/", (req, res) => {
  res.send("get all collection users");
});

// Obtener un único usuario
router.get("/:id", (req, res) => {
  res.send(`get one user ${req.params.id}`);
});

// Crear un usuario
router.post("/", (req, res) => {
  console.log(req.body);
  res.send(`post one user ${req.body.name}`);
});

// Eliminar un usuario
router.delete("/:id", (req, res) => {
  res.send(`delete one user ${req.params.id}`);
});

// Actualizar un usuario
router.patch("/:id", (req, res) => {
  res.send(`patch one user ${req.params.id}`);
});

module.exports = router;
