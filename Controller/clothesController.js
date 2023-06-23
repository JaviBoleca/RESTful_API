const express = require("express");
const router = express.Router();
//importar el modelo clothesModel
const Clothes = require("../Model/clothesModel");

//Get obtener todas las ropas
router.get("/", async (req, res) => {
  try {
    const data = await Clothes.find();
    res.status(200).json({ status: "success", data, error: null });
  } catch (error) {
    res.status(404).json({ status: "fail", data: null, error: error.message });
  }
});

// Obtener todos los ropas
router.get("/", (req, res) => {
  res.send("get all collection clothes");
});

// Obtener una única ropa
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Clothes.findById(id);
    res.status(200).json({ status: "success", data, error: null });
  } catch (error) {
    res.status(404).json({ status: "fail", data: null, error: error.message });
  }
});

// Crear un ropa
router.post("/", async (req, res) => {
  try {
    const data = new Clothes({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      sizes: req.body.sizes,
      colors: req.body.colors,
      brand: req.body.brand,
    });
    await data.save();
    res.status(200).json({ status: "success", data, error: null });
  } catch (error) {
    res.status(404).json({ status: "fail", data: null, error: error.message });
  }
});

// Eliminar un ropa
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Clothes.findByIdAndDelete(id);
    res.status(200).json({ status: "success", data, error: null });
  } catch (error) {
    res.status(404).json({ status: "fail", data: null, error: error.message });
  }
});

// Actualizar un ropa
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    //new:true para que nos devuelva el ropa actualizado
    const data = await Clothes.findByIdAndUpdate(id, body, { new: true });
    res.status(200).json({ status: "success", data, error: null });
  } catch (error) {
    res.status(404).json({ status: "fail", data: null, error: error.message });
  }
});

module.exports = router;
