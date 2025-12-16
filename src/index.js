const express = require('express');
const itemsRouter = require('./routes/items');

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/items', itemsRouter);

// Ruta principal
app.get('/', (req, res) => {
    res.json({ mensaje: 'API REST CRUD con Express.js' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});