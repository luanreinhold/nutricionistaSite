import {con} from './connection.js'

export async function criarTabela (tabela) {
    const comando = 
`
INSERT INTO TB_AGENDAMENTO (ID_USUARIO, NM_PACIENTE, DS_TELEFONE, DT_NASCIMENTO, DS_GENERO, DS_CPF, DS_OBSERVACAO, DT_CONSULTA, DS_PAGAMENTO, VL_VALORTOTAL, BT_COMPARECEU)
VALUES(?,?, ?, ?, ?, ?, ?, ?, ? , ? , ? , ?)
`
    const [resposta] = await con.query (comando, [paciente.id, paciente.nome, paciente.telefone, paciente.nascimento, paciente.genero, paciente.cpf, paciente.observacao, paciente.consulta, paciente.pagamento, paciente.valortotal, paciente.compareceu])
    paciente.id = resposta.insertiD;
    return tabela
}