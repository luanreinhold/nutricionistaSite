import { Router } from 'express'
import { criarTabela } from '../repository/pacienteRepository.js';

const server = Router();

server.post('/tabela', async (req,resp) => {

    try{

        const InserirTabela = req.body

        const x = await criarTabela(InserirTabela);
        resp.send(x);

    } catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }

} )

export default server