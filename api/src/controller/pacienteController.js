import { Router } from 'express'
import { consultarnNomeAgendamento, criarTabela, deletarAgendamento } from '../repository/pacienteRepository.js';

const server = Router();

server.post('/agendamento', async (req,resp) => {

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

server.delete('/agendamento/:id', async (req,resp) => {

    try {
        const { id } = req.params;
        const resposta = await deletarAgendamento(id);
        
        if (resposta !=1)
            throw new Error('Filme não pode ser removido');

        resp.status(204).send();
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
}
})

server.get('/agendamento/:nome', async (req,resp) => {

    try{
        const { nome } = req.params;
        const x = await consultarnNomeAgendamento(nome);
        resp.send(x)

    } catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
        


})




export default server