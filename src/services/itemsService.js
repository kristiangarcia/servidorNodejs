// Base de datos en memoria
let items = [
    { id: 1, nombre: 'Item 1', descripcion: 'Descripcion del item 1' },
    { id: 2, nombre: 'Item 2', descripcion: 'Descripcion del item 2' }
];
let nextId = 3;

const findAll = () => {
    return items;
};

const findById = (id) => {
    return items.find(item => item.id === id);
};

const create = (nombre, descripcion) => {
    const nuevoItem = {
        id: nextId++,
        nombre,
        descripcion: descripcion || ''
    };
    items.push(nuevoItem);
    return nuevoItem;
};

const update = (id, nombre, descripcion) => {
    const index = items.findIndex(item => item.id === id);
    if (index === -1) {
        return null;
    }
    items[index] = { id, nombre, descripcion: descripcion || '' };
    return items[index];
};

const remove = (id) => {
    const index = items.findIndex(item => item.id === id);
    if (index === -1) {
        return false;
    }
    items.splice(index, 1);
    return true;
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};