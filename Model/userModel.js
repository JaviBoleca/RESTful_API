const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: false,
    default: [],
    validate: [
      array.length === 0 ||
        array.every((element) => {
          const keys = Object.keys(element);
          return (
            keys.every((keys) => typeof element[keys[0]] === "boolean") &&
            typeof element[keys[1]] === "string"
          );
        }),
      `No se cumple el formato de los skills`,
    ],
  },
  personality: {
    type: Object,
    required: true,
    validate: [
      (obj) =>
        obj.constructor === Object &&
        Object.values(obj).every((element) => typeof element === "string"),
      "Wrong personality object",
    ],
  },
});


//el primer parametro es el nombre del modelo
//el segundo parametro es el esquema
//el tercer parametro es el nombre de la coleccion en la base de datos
const User = mongoose.model("User", userSchema, "users");

module.exports = User;
