var mongoose =require('mongoose');
Schema = mongoose.Schema;

var clientesSchema = new mongoose.Schema({

    nombres:String,
    apellidos:String,
    correoeletronico:String,
    telefono:String

});

var cliente = mongoose.model('clientes',clientesSchema);
module.exports=cliente;