'use strict';
const Productos = require('../models/producto.model');
exports.findAll = function(req, res) {

  Productos.findAll(function(err, producto) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', producto);
  res.send(producto);
});
};
exports.create = function(req, res) {
  const new_producto = new Productos(req.body);
 
  //handles null error 
 if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Favor diligencie todos los campos obligatorios' });
  }else{
    Productos.create(new_producto, function(err, producto) {
          if (err)
          res.send(err);
          res.json({error:false,message:"El produto se registró satistactoriamente!",data:producto});
      });
  }
};
exports.findById = function(req, res) {
  Productos.findById(req.params.id, function(err, producto) {
  if (err)
  res.send(err);
  res.json(producto);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Favor diligencie todos los campos obligatorios' });
  }else{
    Productos.update(req.params.id, new Productos(req.body), function(err, producto) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'El producto se actualizó con exito' });
});
}
};
exports.delete = function(req, res) {
  Productos.delete( req.params.id, function(err, producto) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'El producto se eliminó satisfactoriamente' });
});
};