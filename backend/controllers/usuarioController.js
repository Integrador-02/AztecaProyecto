import Usuario from "../models/Usuario.js";
import Comentario  from "../models/Usuario.js";

const registrar = async (req, res) => {
    const {email} = req.body

    //prevenir usuarios duplicados
    const existeUsuario = await Usuario.findOne({email})

    if (existeUsuario) {
        const error = new Error('Usuario ya registrado');
        return res.status(400).json({msg: error.message});
    }

    try {
        //Guardar un nuevo Usuario
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();

        res.json(usuarioGuardado);
    } catch (error) {
        console.log(error)
    }
};

const perfil = (req, res) => {

    const {usuario} = req;

    res.json({perfil: usuario}); 
}

const confirmar = async (req, res) => {
    const {token} = req.params

    const usuarioConfirmar = await Usuario.findOne({token});

    if (!usuarioConfirmar) {
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message});
    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();

        res.json({msg: 'Usuario Confirmado Correctamente'});
    } catch (error) {
        console.log(error);
    }

};


const autenticar = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Comprobar si el usuario existe
        const usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(401).json('Credenciales inválidas');
        }

        // Revisar Password
        if (usuario.password === password) {
            req.usuario = usuario; // Agregar el objeto de usuario a la solicitud
            next(); // Llamar al siguiente middleware
        } else {
            return res.status(400).json('Contraseña incorrecta');
        }
    } catch (error) {
        console.log(error);
        res.status(500).json('Error interno del servidor');
    }
};

const guardarComentario = async (req, res) => {
  const { texto, usuarioId, respuestaA } = req.body;

  try {
    // Crear un nuevo comentario
    const comentario = new Comentario({
      texto,
      usuario: usuarioId,
      respuestaA
    });

    // Guardar el comentario en la base de datos
    const comentarioGuardado = await comentario.save();

    res.json(comentarioGuardado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al guardar el comentario' });
  }
};




export {
    registrar,
    perfil,
    confirmar,
    autenticar,
    guardarComentario 
}

import fetch from 'node-fetch';


const url = 'http://localhost:4000/comentarios'; // URL del endpoint para crear comentarios
const datos = {
  texto: 'Este es un comentario de ejemplo',
  usuarioId: '123456789', // ID del usuario que realiza el comentario
  respuestaA: '987654321', // ID del comentario al que se está respondiendo (opcional)
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(datos),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Respuesta del servidor con el comentario guardado
  })
  .catch((error) => {
    console.error(error); // Manejo de errores en caso de falla en la solicitud
  });
