var Producto = require('../models/producto');


const crearProductos = async (req, res) => {
  
  const {nombre,precio,descripcion} = req.body;

  try {
    const nuevoCliente = await Producto.create({ nombre,precio,descripcion});
    res.json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el cliente' });
  }
};
const obtenerProductos = async (req, res) => {
try {
  const producto = await Producto.find();
  res.json(producto);
} catch (error) {
  res.status(500).json({ error: 'Error al obtener los productos' });
}
};

const actualizarProducto = async (req, res) => {
const { id } = req.params;
const { nombre,precio,descripcion} = req.body;

try {
  const productoActualizado = await Producto.findByIdAndUpdate(
    id,
    {nombre,precio,descripcion },
    { new: true }
  );
  res.json(productoActualizado);
} catch (error) {
  res.status(500).json({ error: 'Error al actualizar el producto' });
}
};


const eliminarProducto = async (req, res) => {
const { id } = req.params;

try {
  await Producto.findByIdAndRemove(id);
  res.json({ message: 'producto eliminado exitosamente' });
} catch (error) {
  res.status(500).json({ error: 'Error al eliminar el producto' });
}
};


module.exports ={crearProductos,obtenerProductos,eliminarProducto,actualizarProducto};
