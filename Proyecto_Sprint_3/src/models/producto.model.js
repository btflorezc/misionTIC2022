'use strict';
var dbConn = require('../../config/db.config');
//crear objeto venta
var Producto = function (producto) {
  this.id_producto = producto.id_producto;
  this.descripcion_producto = producto.descripcion_producto;
  this.estado_producto = producto.estado_producto;
  this.precio_producto = producto.precio_producto;

};
Producto.create = function (newPro, result) {
  dbConn.query("INSERT INTO productos set ?", newPro, function (err, res) {
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
Producto.findById = function (id, result) {
  dbConn.query("Select * from productos where id_producto = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
Producto.findAll = function (result) {
  dbConn.query("Select * from productos", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('productos : ', res);
      result(null, res);
    }
  });
};
Producto.update = function (id, producto, result) {
  dbConn.query("UPDATE productos SET id_producto=?,descripcion_producto=?,estado_producto=?,precio_producto=? WHERE id_producto = ?", [producto.id_producto, producto.descripcion_producto, producto.estado_producto, producto.precio_producto, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Producto.delete = function (id, result) {
  dbConn.query("DELETE FROM productos WHERE id_producto = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
module.exports = Producto;