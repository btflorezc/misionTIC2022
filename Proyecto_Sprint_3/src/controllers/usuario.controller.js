'use strict';
const usuario = require('../models/usuario.model');
exports.findAll = function(req, res) {

  usuario.findAll(function(err, usuario) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', usuario);
  res.send(usuario);
});
};
exports.create = function(req, res) {
  const new_usuario = new usuario(req.body);
 
  //handles null error 
 if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Favor diligencie todos los campos obligatorios' });
  }else{
    usuario.create(new_usuario, function(err, usuario) {
          if (err)
          res.send(err);
          res.json({error:false,message:"El usuario se registró satistactoriamente!",data:usuario});
      });
  }
};
exports.findById = function(req, res) {
  usuario.findById(req.params.id, function(err, usuario) {
  if (err)
  res.send(err);
  res.json(usuario);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Favor diligencie todos los campos obligatorios' });
  }else{
    usuario.update(req.params.id, new usuario(req.body), function(err, usuario) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'El usuario se actualizó con exito' });
});
}
};
exports.delete = function(req, res) {
  usuario.delete( req.params.id, function(err, usuario) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'El usuario se eliminó satisfactoriamente' });
});
};