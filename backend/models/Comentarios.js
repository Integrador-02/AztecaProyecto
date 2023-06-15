import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const comentarioSchema = mongoose.Schema({
    comentario: String,
    comentadorID: ObjectId,
    fecha: Date,
    
});


const Comentario = mongoose.model("Comentarios", comentarioSchema);
export default Comentario;
