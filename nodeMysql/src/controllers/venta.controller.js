'use strict';
const Ventas = require('../models/venta.model');
exports.findAll = function(req, res) {

  Ventas.findAll(function(err, venta) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', venta);
  res.send(venta);
});
};
exports.create = function(req, res) {
  const new_venta = new Ventas(req.body);
 
  //handles null error 
 if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Favor diligencie todos los campos obligatorios' });
  }else{
      Ventas.create(new_venta, function(err, venta) {
          if (err)
          res.send(err);
          res.json({error:false,message:"La venta se registro satistactoriamente!",data:venta});
      });
  }
};
exports.findById = function(req, res) {
Ventas.findById(req.params.id, function(err, venta) {
  if (err)
  res.send(err);
  res.json(venta);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Favor diligencie todos los campos obligatorios' });
  }else{
    Ventas.update(req.params.id, new Ventas(req.body), function(err, venta) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'la venta se actualizo con exito' });
});
}
};
exports.delete = function(req, res) {
Ventas.delete( req.params.id, function(err, venta) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'la venta se elimino satisfactoriamente' });
});
};