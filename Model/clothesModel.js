const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClotheSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    unique: true,
    required: true,
  },

  sizes: {
    type: Array,
    required: true,
    validate: [
      (array) =>
        array.length !== 0 &&
        array.every((element) => typeof element === "string"),
      "At least one size is required",
    ],
  },
  colors: {
    type: Array,
    required: true,
    validate: [
      (array) =>
        array.length !== 0 &&
        array.every((element) => typeof element === "string"),
      "At least one color is required",
    ],
  },

  brand: {
    type: String,
    required: true,
  },
});

//el primer parametro es el nombre del modelo
//el segundo parametro es el esquema
//el tercer parametro es el nombre de la coleccion en la base de datos
const Clothe = mongoose.model("Clothe", ClotheSchema, "clothes");

module.exports = Clothe;
