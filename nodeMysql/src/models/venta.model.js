'use strict';
var dbConn = require('../../config/db.config');
//crear objeto venta
var Venta = function(venta){
  this.id_venta                   = venta.id_venta;
  this.fecha_venta                = venta.fecha_venta;
  this.doc_identificacion_cliente = venta.doc_identificacion_cliente;
  this.nombre_cliente             = venta.nombre_cliente;
  this.estado_producto             = venta.estado_producto;
  this.id_user                    = venta.id_user;
  
};
Venta.create = function (newVent, result) {
dbConn.query("INSERT INTO ventas set ?", newVent, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Venta.findById = function (id, result) {
dbConn.query("Select * from ventas where id_venta = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Venta.findAll = function (result) {
dbConn.query("Select * from ventas", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('ventas : ', res);
  result(null, res);
}
});
};
Venta.update = function(id, venta, result){
dbConn.query("UPDATE ventas SET id_venta=?,fecha_venta=?,doc_identificacion_cliente=?,nombre_cliente=?,estado_producto=?,id_user=? WHERE id_venta = ?", [venta.id_venta,venta.fecha_venta,venta.doc_identificacion_cliente,venta.nombre_cliente,venta.estado_producto,venta.id_user, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Venta.delete = function(id, result){
dbConn.query("DELETE FROM ventas WHERE id_venta = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Venta;