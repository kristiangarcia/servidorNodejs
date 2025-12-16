const itemsService = require('../services/itemsService');

// GET - Obtener todos los items
const getAll = (req, res) => {
    const items = itemsService.findAll();
    res.json(items);
};

// GET - Obtener un item por ID
const getById = (req, res) => {
    const id = parseInt(req.params.id);
    const item = itemsService.findById(id);

    if (!item) {
        return res.status(404).json({ error: 'Item no encontrado' });
    }
    res.json(item);
};

// POST - Crear un nuevo item
const create = (req, res) => {
    const { nombre, descripcion } = req.body;

    if (!nombre) {
        return res.status(400).json({ error: 'El nombre es requerido' });
    }

    const nuevoItem = itemsService.create(nombre, descripcion);
    res.status(201).json(nuevoItem);
};

// PUT - Actualizar un item completo
const update = (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, descripcion } = req.body;

    if (!nombre) {
        return res.status(400).json({ error: 'El nombre es requerido' });
    }

    const itemActualizado = itemsService.update(id, nombre, descripcion);

    if (!itemActualizado) {
        return res.status(404).json({ error: 'Item no encontrado' });
    }
    res.json(itemActualizado);
};

// DELETE - Eliminar un item
const remove = (req, res) => {
    const id = parseInt(req.params.id);
    const eliminado = itemsService.remove(id);

    if (!eliminado) {
        return res.status(404).json({ error: 'Item no encontrado' });
    }
    res.status(204).send();
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};