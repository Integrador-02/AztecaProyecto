import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    password: String,
    email: String,
  });
  
  const comentarioSchema = new mongoose.Schema({
    texto: {
      type: String,
      required: true,
    },
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    fecha: {
      type: Date,
      default: Date.now,
    },
    likes: {
      type: Number,
      default: 0,
    },
    respuestaA: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comentario",
    },
  });
  
  const Comentario = mongoose.model("Comentario", comentarioSchema);
  const Usuario = mongoose.model("Usuario", usuarioSchema);
  
  export default {Usuario,Comentario};