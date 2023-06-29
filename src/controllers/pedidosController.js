var Cliente = require('../models/cliente');
var Producto = require('../models/producto');
var pedido = require('../models/pedido');


const crearPedido = async (req, res) => {
  const { cliente, productos, cantidades, descripcion, fecha, direccionEntrega,estado } = req.body;

  try {
    const clienteId = await Cliente.findById(cliente);
    const productosData = await Promise.all(productos.map((producto) => Producto.findById(producto)));

    if (!clienteId || productosData.includes(null)) {
      return res.status(404).json({ error: 'No se encontró el cliente o algún producto' });
    }

    const cventa = {cliente: clienteId,productos: productosData,cantidad: cantidades,descripcion,fecha,cliente, productos, cantidades, descripcion, fecha, direccionEntrega,estado};

    const nuevopedido = await Pedido.create(cpedido);

    res.json(nuevopedido);
} catch (error) {
  res.status(500).json({ error: 'Error al crear el pedido' });
}
};

const obtenerPedidos = async (req, res) => {
try {
  const pedidos = await pedido.find();
  res.json(pedidos);
} catch (error) {
  res.status(500).json({ error: 'Error al obtener los pedidos' });
}
};

const actualizarPedido = async (req, res) => {
const { id } = req.params;
const { cliente, productos, cantidades, descripcion, fecha, hora  } = req.body;

try {
  const pedidoActualizado = await pedido.findByIdAndUpdate(
    id,
    { cliente, productos, cantidades, descripcion, fecha, hora  },
    { new: true }
  );
  res.json(pedidoActualizado);
} catch (error) {
  res.status(500).json({ error: 'Error al actualizar el pedido' });
}
};


const eliminarPedido = async (req, res) => {
const { id } = req.params;

try {
  await pedido.findByIdAndRemove(id);
  res.json({ message: 'pedido eliminado exitosamente' });
} catch (error) {
  res.status(500).json({ error: 'Error al eliminar el pedido' });
}
};


module.exports ={crearPedido,obtenerPedidos,eliminarPedido,actualizarPedido};
