import { Router} from 'express'
import { login } from '../repository/adminRepository.js';

const server = Router();

server.post('/usuario/login', async (req,resp) => {

    try {
    const {email, senha} = req.body;

    const Realizarlogin = await login(email, senha);
    
        if(!Realizarlogin) {
            resp.status(401).send({
                erro: "Credenciais Inválidas"
            })
        }

    console.log(Realizarlogin)
    resp.send(Realizarlogin)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
}
)



export default server