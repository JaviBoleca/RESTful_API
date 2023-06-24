const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LoginSchema = new Schema({
  email: {
    type: String,
    required: [true, "el email es requerido"],
    unique: true,
    trim: true,
    minLenght: 6,
  },
  password: {
    type: String,
    required: [true, "el password es requerido"],
    trim: true,
    minLenght: 8,
  },
  role: {
    type: String,
    required: [true, "El rol es requerido"],
    enum: ["admin", "user"],
    default: "user",
  },
});

const Login = mongoose.model("Login", LoginSchema, "Login");
module.exports = Login;
