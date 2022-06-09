import {con} from './connection.js'

export async function criarTabela (paciente) {
    const comando = 
`
INSERT INTO TB_AGENDAMENTO (ID_USUARIO, NM_PACIENTE, DS_TELEFONE, DT_NASCIMENTO, DS_GENERO, DS_CPF, DS_OBSERVACAO, DT_CONSULTA, DS_PAGAMENTO, VL_VALORTOTAL, BT_COMPARECEU)
VALUES(?,?, ?, ?, ?, ?, ?, ?, ? , ? , ?)
`;
    const [resposta] = await con.query (comando, [paciente.id, paciente.nome, paciente.telefone, paciente.nascimento, paciente.genero, paciente.cpf, paciente.observacao, paciente.consulta, paciente.pagamento, paciente.valortotal, paciente.compareceu])
    paciente.id = resposta.insertId;
    return paciente
}

export async function deletarAgendamento (id) {
    const comando =
    ` DELETE FROM   TB_AGENDAMENTO 
      WHERE         ID_AGENDAMENTO = ?`;

    const [resposta] = await con.query (comando, [id]);
    return resposta.affectedRows;
    
}

export async function consultarnNomeAgendamento (nome) {
    const comando =
    `   SELECT 	NM_PACIENTE		 NOME,
        DS_CPF			         CPF,
        DT_CONSULTA		         DATAEHORA,
        VL_VALORTOTAL	         TOTAL,
        ID_AGENDAMENTO	         FICHA
FROM 	TB_AGENDAMENTO
WHERE 	NM_PACIENTE			like ?`;

    const [linhas] = await con.query (comando, [`%${nome}%`]);
    return linhas
}

export async function consultarData (data) {
    const comando =
    `   SELECT	DT_AGENDAMENTO			NOME,
        DS_CPF					        CPF,
        DT_AGENDAMENTO			        AGENDAMENTO,
        DT_CONSULTA			 	        DATAEHORA,
        VL_VALORTOTAL		 	        TOTAL,
        ID_AGENDAMENTO		 	        FICHA
   FROM TB_AGENDAMENTO
  WHERE DT_AGENDAMENTO = ?`;
    const [linhas] = await con.query(comando, [data]);
    return linhas;
}

export async function editarAgendamento (id, paciente) {
    const comando =
    `UPDATE TB_AGENDAMENTO 
    SET NM_PACIENTE             = ?,
        DS_TELEFONE             = ?,
        DT_NASCIMENTO           = ?,
        DS_GENERO		        = ?,
        DS_CPF		        	= ?,
        DS_OBSERVACAO	        = ?,
        DT_CONSULTA	            = ?,
        DS_PAGAMENTO		    = ?,
        VL_VALORTOTAL	        = ?,
        BT_COMPARECEU           = ?
  WHERE ID_AGENDAMENTO = ?`;

  const [resposta] = await con.query (comando, [paciente.nome, paciente.telefone, paciente.nascimento, paciente.genero, paciente.cpf, paciente.observacao, paciente.consulta, paciente.pagamento, paciente.valortotal, paciente.compareceu, id]);
  return resposta.affectedRows;
}

export async function BuscarPorId(id) {
    const comando=
    `SELECT	DT_AGENDAMENTO		=	NOME,
    DS_CPF				        =	CPF,
    DT_AGENDAMENTO		        =	AGENDAMENTO,
    DT_CONSULTA			        = 	DATAEHORA,
    VL_VALORTOTAL		        = 	TOTAL,
    ID_AGENDAMENTO		        = 	FICHA
    FROM TB_AGENDAMENTO
    WHERE ID_AGENDAMENTO = ? `;
   
    const[linhas]= await con.query(comando, [id]);
    return linhas[0];
}

export async function BuscarPorNome(nome) {
    const comando=
    `SELECT NM_PACIENTE		= NOME,
            DS_CPF			= CPF,
            DT_CONSULTA		= DATAEHORA,
            VL_VALORTOTAL	= TOTAL,
            ID_AGENDAMENTO	= FICHA
    FROM 	TB_AGENDAMENTO
    WHERE 	NM_PACIENTE			like ?`;
   
    const[linhas]= await con.query(comando, [`%${nome}%`]);
    return linhas;
}

