//SERVIDOR BASICO

//cargamos modulo http en el servidor
const http = require("http");
//declaramos el puerto donde se ejecutara el servidor
const port = 8000;
//creamos el servidor
const server = http
  .createServer(
    //el req contiene los detalles de la solicitud
    //res envia la respuesta al cliente
    (req, res) => {
      res.statusCode = 200;
      //el formato de la respuesta, en este caso texto plano, suele ser json
      res.setHeader("Content-Type", "text/plain");
        //enviamos la respuesta en este caso un html
      res.end("Hello World\n in da face!!!klkll?¿?¿opop8989989");
    }
  )
  .listen(port, () => {
    console.log(`Server running at http://localhost: ${port}`);
  });
