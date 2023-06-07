import express from 'express'
import {
    registrar,
    confirmar,
    autenticar,
    guardarComentario
} from '../controllers/usuarioController.js'
import cors from 'cors';


const router = express();
// Habilitar CORS
app.use(cors());

//area publica
router.post('/', registrar);
router.post('/login', autenticar, (req, res) => {
    // Se llega a este punto solo si la autenticación fue exitosa
    res.status(200).json('ok');
});
router.post('/comentarios', guardarComentario);
//area privada
//router.get('/perfil', checkAuth, perfil);

export default router;