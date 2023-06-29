var cliente = require('../models/cliente');

const crearClientes = async (req, res) => {
  
    const {nombres,apellidos,correroelectronico,telefono} = req.body;
  
    try {
      const nuevoCliente = await cliente.create({ nombres,apellidos,correroelectronico,telefono});
      res.json(nuevoCliente);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el cliente' });
    }
  };

  
  
  const obtenerClientes = async (req, res) => {
    try {
      const clientes = await cliente.find();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el clientes' });
    }
  };



  const actualizarCliente = async (req, res) => {
    const { id } = req.params;
    const { nombres,apellidos,correroelectronico,telefono } = req.body;
  
    try {
      const clienteActualizado = await cliente.findByIdAndUpdate(
        id,
        { nombres,apellidos,correroelectronico,telefono },
        { new: true }
      );
      res.json(clienteActualizado);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el cliente' });
    }
  };
  
  
  const eliminarCliente= async (req, res) => {
    const { id } = req.params;
  
    try {
      await cliente.findByIdAndRemove(id);
      res.json({ message: 'Cliente eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el cliente' });
    }
  };


  module.exports ={crearClientes , obtenerClientes, eliminarCliente, actualizarCliente};

