# API REST CRUD con Node.js y Express

API REST que implementa operaciones CRUD basicas usando Node.js y Express.js 5.

## Estructura del proyecto

```
src/
├── index.js              # Punto de entrada
├── routes/
│   └── items.js          # Definicion de rutas
├── controllers/
│   └── itemsController.js # Manejo de peticiones HTTP
└── services/
    └── itemsService.js   # Logica de negocio
```

## Instalacion

```bash
npm install
```

## Ejecucion

```bash
# Produccion
npm start

# Desarrollo (auto-reload)
npm run dev
```

El servidor corre en `http://localhost:3000`

## Endpoints

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/api/items` | Obtener todos los items |
| GET | `/api/items/:id` | Obtener item por ID |
| POST | `/api/items` | Crear nuevo item |
| PUT | `/api/items/:id` | Actualizar item |
| DELETE | `/api/items/:id` | Eliminar item |

## Ejemplos de uso

### Obtener todos los items
```bash
curl http://localhost:3000/api/items
```

### Obtener un item por ID
```bash
curl http://localhost:3000/api/items/1
```

### Crear un item
```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Nuevo item","descripcion":"Descripcion del item"}'
```

### Actualizar un item
```bash
curl -X PUT http://localhost:3000/api/items/1 \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Item actualizado","descripcion":"Nueva descripcion"}'
```

### Eliminar un item
```bash
curl -X DELETE http://localhost:3000/api/items/1
```

## Tecnologias

- Node.js
- Express.js 5.2.1