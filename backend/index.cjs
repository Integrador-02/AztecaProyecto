require('dotenv').config(); // Importar la librería dotenv para leer las variables de entorno

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware para permitir CORS
app.use(cors());
app.use(express.json());

// Definir el esquema del usuario
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

// Crear el modelo de usuario basado en el esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Conexión a la base de datos MongoDB
const conectarDB = async() => {
  try {
      const db = await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });

      const url = `${db.connection.host}:${db.connection.port}`
      console.log(`MongoDB conectado en: ${url}`);

  } catch (error) {
      console.log(`error: ${error.message}`);
      process.exit(1);
  }
};
conectarDB();