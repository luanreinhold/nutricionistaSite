import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarAgendamento(nome, telefone, nascimento, genero, cpf, observacoes, data, horario, pagamento, total) {
    const resposta = await api.post('/filme', {
        nome: nome,
        telefone: telefone,
        nascimento: nascimento,
        genero: genero,
        cpf: cpf,
        observacoes: observacoes,
        data: data,
        pagamento: pagamento,
        total: total
    })  
    return resposta.data
}