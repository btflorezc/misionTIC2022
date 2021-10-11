'use strict';
var dbConn = require('../../config/db.config');
//crear objeto venta
var usuario = function (usuario) {
  this.id_usuarios = usuario.id_usuarios;
  this.tipo_documento = usuario.tipo_documento;
  this.num_identificacion = usuario.num_identificacion;
  this.nombre_usuario = usuario.nombre_usuario;
  this.estado = usuario.estado;
  this.rol = usuario.rol;
  this.email = usuario.email;
  this.telefono_usuario = usuario.telefono_usuario;
};
usuario.create = function (newPro, result) {
  dbConn.query("INSERT INTO usuarios set ?", newPro, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
usuario.findById = function (id, result) {
  dbConn.query("Select * from usuario where id_usuarios = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
usuario.findAll = function (result) {
  dbConn.query("Select * from usuarios", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('usuario : ', res);
      result(null, res);
    }
  });
};
usuario.update = function (id, usuario, result) {
  dbConn.query("UPDATE usuario SET id_usuarios=?,tipo_documento=?,num_identificacion=?,nombre_usuario=?,estado=?,rol=?,email=?,telefono_usuario=? WHERE id_usuarios = ?", [usuario.id_usuarios, usuario.tipo_documento, usuario.num_identificacion, usuario.nombre_usuario, usuario.estado, usuario.rol, usuario.email, usuario.telefono_usuario], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
usuario.delete = function (id, result) {
  dbConn.query("DELETE FROM usuario WHERE id_usuarios = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
module.exports = usuario;