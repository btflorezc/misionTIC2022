const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("ANTONELA REPOSTERIA");
});
// Require employee routes
const productoRoutes = require('./src/routes/producto.routes')
const usuarioRoutes = require('./src/routes/usuario.routes')
// using as middleware
app.use('/api/v1/producto', productoRoutes)
app.use('/api/v1/usuario', usuarioRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});