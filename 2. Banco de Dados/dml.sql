use NUTRICIONISTA;


-- carga inicial usuario admin
INSERT INTO TB_USUARIO (NM_USUARIO, DS_EMAIL, DS_SENHA)
VALUES ('admin','admin@admin.com.br','1234' );

--  efetuar login
select ID_USUARIO 		ID,
       NM_USUARIO		NOME,
       DS_EMAIL			EMAIL
  from TB_USUARIO
 where DS_EMAIL 		= 'admin@admin.com.br'
   and DS_SENHA			= '1234';

-- Realiza Agendamento
INSERT INTO TB_AGENDAMENTO (ID_USUARIO, NM_PACIENTE, DS_TELEFONE, DT_NASCIMENTO, DS_GENERO, DS_CPF, DS_OBSERVACAO, DT_CONSULTA, DS_PAGAMENTO, VL_VALORTOTAL, BT_COMPARECEU)
VALUES(1,'Bianca Liebetanz', '11 94138-1404', '2006-04-14', 'Feminino', '484.491.39805', 'Inteligentíssima, inimiga do Reinhold', '2022-08-23 12:30:00', 'Dinheiro', 100.00, true);


-- Remover Agendamento
DELETE FROM TB_AGENDAMENTO 
      WHERE ID_AGENDAMENTO = 1;


-- Alterar Agendamento
UPDATE TB_AGENDAMENTO 
   SET NM_PACIENTE      = 'Bianca Liebetanz',
       DS_TELEFONE    = '11 94138-1404',
       DT_NASCIMENTO = '2006-04-14',
       DS_GENERO		= 'Feminino',
       DS_CPF			= '484.491.398-05',
       DS_OBSERVACAO	= 'Inteligentíssima, inimiga do Reinhold',
       DT_CONSULTA	= '2022-08-23 12:30:00',
       DS_PAGAMENTO		= 'Dinheiro',
       VL_VALORTOTAL	= 100.00,
       BT_COMPARECEU = true
 WHERE ID_AGENDAMENTO = 1;


 -- consultar todos os agendamentos     
SELECT 	NM_PACIENTE			 nome,
		DS_CPF				 CPF,
		DT_CONSULTA			 DATAEHORA,
		VL_VALORTOTAL		 TOTAL
FROM 	TB_AGENDAMENTO;
  




 -- Pesquisar por nome
SELECT 	NM_PACIENTE		= NOME,
		DS_CPF			= CPF,
		DT_CONSULTA		= DATAEHORA,
		VL_VALORTOTAL	= TOTAL,
        ID_AGENDAMENTO	= FICHA
FROM 	TB_AGENDAMENTO
WHERE 	NM_PACIENTE			like '%a%';
        

-- Pesquisar por ID
SELECT	DT_AGENDAMENTO		=	NOME,
		DS_CPF				=	CPF,
		DT_AGENDAMENTO		=	AGENDAMENTO,
		DT_CONSULTA			= 	DATAEHORA,
		VL_VALORTOTAL		= 	TOTAL,
        ID_AGENDAMENTO		= 	FICHA
        FROM TB_AGENDAMENTO
		WHERE ID_AGENDAMENTO = 1;
        
        
        
        
        