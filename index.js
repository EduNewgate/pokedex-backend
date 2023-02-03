const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Crear servidor express
const app = express();

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

// Rutas
app.get('/', cors(corsOptions), (req, res) => {
    res.json({
        ok: true,
        mgs: 'Hola Mundo'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Servidor levantado en el puerto ' + process.env.PORT);
});