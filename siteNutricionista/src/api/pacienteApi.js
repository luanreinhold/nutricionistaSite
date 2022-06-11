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