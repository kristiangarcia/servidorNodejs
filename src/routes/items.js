const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// GET /api/items - Obtener todos
router.get('/', itemsController.getAll);

// GET /api/items/:id - Obtener uno por ID
router.get('/:id', itemsController.getById);

// POST /api/items - Crear nuevo
router.post('/', itemsController.create);

// PUT /api/items/:id - Actualizar
router.put('/:id', itemsController.update);

// DELETE /api/items/:id - Eliminar
router.delete('/:id', itemsController.remove);

module.exports = router;