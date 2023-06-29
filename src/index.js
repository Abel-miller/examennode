const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const conexion = require('./config/conexion');
const ruta=require('./routers/router');

app.use(bodyParser.json());
app.use('/',ruta);
app.listen(3000, () => {
  console.log("Servidor iniciado");
 
});
