var mongoose =require('mongoose');
Schema = mongoose.Schema;

var productoSchema = new mongoose.Schema({
    
    nombre:String,
    precio:Number,
    descripcion:String,
    
});

var producto = mongoose.model('producto',productoSchema);
module.exports=producto;