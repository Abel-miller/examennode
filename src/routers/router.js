const express = require('express');
const router = express.Router();
const {crearClientes, obtenerClientes, eliminarCliente, actualizarCliente} = require('../controllers/clientesController');
const {crearProductos,obtenerProductos,actualizarProducto,eliminarProducto} = require('../controllers/productosController');
const {crearPedido,obtenerPedidos,eliminarPedido,actualizarPedido} = require('../controllers/pedidosController');

//Rutas Clientes
router.get('/clientes', obtenerClientes);
router.post('/clientes', crearClientes);
router.get('/clientes/:id', obtenerClientes);
router.put('/clientes/:id', actualizarCliente);
router.delete('/clientes/:id', eliminarCliente);


//Rutas Productos
router.get('/productos', obtenerProductos);
router.post('/productos', crearProductos);
router.put('/productos/:id', actualizarProducto);
router.delete('/productos/:id', eliminarProducto);


//Rutas Pedidos
router.get('/pedidos', obtenerPedidos);
router.post('/pedidos', crearPedido);
router.put('/pedidos/:id', actualizarPedido);
router.delete('/pedidos/:id', eliminarPedido);


module.exports = router;
