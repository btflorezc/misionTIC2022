'use strict';
const mysql = require('mysql2');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Colombia.2021',
  database : 'antonela_reposteria'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;