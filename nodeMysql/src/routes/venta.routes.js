const express = require('express')
const router = express.Router()
const ventaController =   require('../controllers/venta.controller');
// Retrieve all employees
router.get('/', ventaController.findAll);
// Create a new employee
router.post('/', ventaController.create);
// Retrieve a single employee with id
router.get('/:id', ventaController.findById);
// Update a employee with id
router.put('/:id', ventaController.update);
// Delete a employee with id
router.delete('/:id', ventaController.delete);
module.exports = router