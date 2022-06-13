import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarAgendamento(nome, telefone, nascimento, genero, cpf, observacao, consulta, horario, pagamento, valortotal, compareceu) {
    
    const resposta = await api.post('/agendamento', {
        nome: nome,
        telefone: telefone,
        nascimento: nascimento,
        genero: genero,
        cpf: cpf,
        observacao: observacao,
        consulta: consulta,
        horario: horario,
        pagamento: pagamento,
        valortotal: valortotal,
        compareceu: compareceu
    })  


    console.log(resposta)
    return resposta.data
}

export async function AlterarAgendamento(id, nome, telefone, nascimento, genero, cpf, observacao, consulta, horario, pagamento, valortotal, compareceu) {
    
    const resposta = await api.put(`/agendamento/${id}`, {
        nome: nome,
        telefone: telefone,
        nascimento: nascimento,
        genero: genero,
        cpf: cpf,
        observacao: observacao,
        consulta: consulta,
        horario: horario,
        pagamento: pagamento,
        valortotal: valortotal,
        compareceu: compareceu
    })  

    console.log(resposta)
    return resposta.data
}

export async function listarTodosAgendamentos() {
    const resp = await api.get('/agendamento')
    return resp.data;
}

export async function buscarNome(filtro) {
    const resposta = await api.get(`/agendamento/busca?nome=${filtro}`)
    return resposta.data;
}

export async function deletarAgendamento(id){
    const resposta = await api.delete(`/agendamento/${id}`);
    return resposta.status;
}



export async function buscarId(id) {
    const resposta = await api.get(`/paciente/${id}`)
    return resposta.data;
}