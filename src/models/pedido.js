var mongoose =require('mongoose');
Schema = mongoose.Schema;

var pedidoSchema = new mongoose.Schema({
    
    cliente:Object,
    productos: [{ type: Object }],
    cantidad:[Number],
    descripcion:String,
    fecha:Date,
    direccionEntrega:String,
    estado:String

});

var pedido = mongoose.model('pedido',pedidoSchema);
module.exports=pedido;