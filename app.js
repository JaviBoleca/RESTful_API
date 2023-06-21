const express = require("express");
const mongoose = require("mongoose");
// mongoose.set('strictQuery', true); //para que no se puedan hacer consultas con parametros que no esten definidos en el modelo
const port = 8000;
// asi creamos la aplicacion de express
const app = express();
//analizar los archivos json
app.use(express.json());

//esto nos permite obetener la informacion de configuracion de env
require("dotenv").config();

//ontenemos la cadena de conexiona la base de datos desde las variables de entorno(fichero.env)
const mongourl = process.env.DATABASE_URL_DEV;

//configuracion con mongodb
//useNewUrlParser le indica a mongoose que use el nuevo analizador de URL dela cadena de conexion
mongoose.connect(mongourl, {useNewUrlParser: true});

// guardar la conexion en una variable
const db = mongoose.connection;

//verificamos que la conexion sea correcta de lo contrario nos mostrara un error
db.on("error", (error) => console.error(error));

//si la conexion es correcta nos mostrara un mensaje
db.once("connected", () => console.log("connected to database successfully"));

//si la conexion se pierde nos mostrara un mensaje
db.on("disconnected", () => console.log("disconnected to database"));

const users = require('./Controller/userController');
app.use('/users', users);

app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
});
