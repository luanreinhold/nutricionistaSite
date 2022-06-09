import { Router } from 'express'
import { BuscarPorId, BuscarPorNome, consultarData, consultarnNomeAgendamento, criarTabela, deletarAgendamento, editarAgendamento } from '../repository/pacienteRepository.js';

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

server.get('/agendamentondata/:data', async (req, resp) => {

    try{
        const { data } = req.params;
        const z = await consultarData(data)
        resp.send(z)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

server.put('/agendamento/:id', async (req,resp) => {

    try{
        const { id } = req.params;
        const paciente = req.body;
        
        const resposta = await editarAgendamento(id, paciente);
        resp.status(202).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

}) 

server.get('/paciente/busca', async (req, resp) => {
    try {
        const{ nome }= req.query;
        const resposta= await BuscarPorNome(nome);
        
        if(resposta.length == 0)
        throw new Error("Paciente não encontrado");
        
        resp.send(resposta);
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
        
    }
})


server.get('/paciente/:id', async(req, resp) => {
    try {
        const{id}= req.params;
        const resposta= await BuscarPorId(Number(id));
        
        if(!resposta)
        throw new Error("Paciente não encontrado");
        
        resp.send(resposta);
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
        
    }
})



export default server