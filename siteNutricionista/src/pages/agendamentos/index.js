import './index.scss'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cadastrarAgendamento, AlterarAgendamento, buscarId } from '../../api/pacienteApi'
import storage from 'local-storage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useParams } from 'react-router-dom';


export default function Index() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [genero, setGenero] = useState('');
    const [cpf, setCpf] = useState('');
    const [observacao, setObservacao] = useState('');

    const [consulta, setConsulta] = useState('');
    const [horario, setHorario] = useState('');
    const [pagamento, setPagamento] = useState('');
    const [valortotal, setValortotal] = useState(0);
//--
    const [id, setId] = useState(0);

    const { idParam } = useParams();


    useEffect(() => {
        if (idParam) {
            carregarAgendamentoo();
        }
    }, [])
   
   async function carregarAgendamentoo() {
        const resposta = await buscarId(idParam);
       setNome(resposta.NOME);
       setTelefone(resposta.TELEFONE);
       setNascimento(resposta.DATA.substr(0, 10));
       setGenero(resposta.GENERO);
       setCpf(resposta.CPF);
       setObservacao(resposta.OBSERVACAO);
       setConsulta(resposta.CONSULTA.substr(0, 10));
       setHorario(resposta.HORA);
       setPagamento(resposta.PAGAMENTO);
       setValortotal(resposta.TOTAL);
       setId(resposta.ID);
    }



    async function SalvarClick() {
        try {

          
            const usuario = storage('usuario-logado').id;
            
            if (id === 0) {
                const novoAgendamento = await cadastrarAgendamento(nome, telefone, nascimento, genero, cpf, observacao, consulta, horario, pagamento, valortotal, usuario);  
                setId(novoAgendamento.id)
                toast('Agendamento cadastrado com sucesso!');
            } else {
                await AlterarAgendamento(id, nome, telefone, nascimento, genero, cpf, observacao, consulta, horario, pagamento, valortotal, usuario);  
                toast('Agendamento alterado com sucesso!');
            }
                
            
        } catch (err) {
            toast.error(err.message)
        }

        
    }

    function NovoClick() {
        setId(0);
        setNome('');
        setTelefone('');
        setNascimento('');
        setGenero('');
        setCpf('');
        setObservacao('');
        setConsulta('');
        setHorario('');
        setPagamento('');
        setValortotal(0);
    }


    return (
        
        <main className="Page_Agendamento">
              <ToastContainer />
<section class="pagina fb-row">

<div class="indice fb-column">

            <Link className='Menu' to="../admin">
                <img class="home-img" src="/images/home-svgrepo-com.svg" alt=""/>
                <p class="texto-botao">Voltar ao Menu</p>
            </Link>

       </div>


    <div class="fb-column editando">
         <div class="titulos">
             <div>
                 <h1 class="titulo">Edi????o</h1>
                 <h2 class="subtitulo">Edite seus agendamentos aqui</h2>

             </div>
         </div>

         <div class="caixa1 jc-center">
             <h3 class="texto"> Dados do paciente</h3>
             <div class="fileira1">

                     <div class="caixa1 caixa-nome">
                         <p class="desc1 texto">Nome</p>
                         <input class="nome" type="text" value={nome} onChange={e => setNome(e.target.value)}   />
                     </div>

                 <div class="caixa1">
                     <p class="desc2 texto">Telefone</p>
                     <input class="ficha" type="text" value={telefone} onChange={e => setTelefone(e.target.value)} />
                 </div>

             </div>
         </div>

         <div class="caixa1">
             <div class="fileira1">
                 <div class="caixa1">
                     <p class="desc1 texto">Data de nascimento</p>
                     <input class="dt-conf" type="date" value={nascimento} onChange={e => setNascimento(e.target.value)}  />
                 </div>

                 <div class="caixa1">
                     <p class="desc3 texto">G??nero</p>
                     <input class="genero-CPF" type="text" value={genero} onChange={e => setGenero(e.target.value)}   /> 
                 </div>

                 <div class="caixa1">
                     <p class="desc3 texto">CPF</p>
                     <input class="genero-CPF" type="text" value={cpf} onChange={e => setCpf(e.target.value)}   />
                 </div>
                 
             </div>
         </div>

         <div class="caixa1">

             <div class="fileira1">
                     <div class="caixa1">
                         <p class="desc1 texto">Obseva????es:</p>
                         <textarea class="obs" name="observa????es" id="" cols="30" rows="10" value={observacao} onChange={e => setObservacao(e.target.value)} /> 
                     </div>
             </div>
         </div>

             <div class="titulos">
                 <h3 class="texto">Dados da Consulta</h3>
             </div>

             <div class="caixa1">
                 <div class="fileira1">
                     <div class="fileira1">
                             <div class="caixa1">
                                 <p class="desc1 texto">Data:</p>
                                 <input class="dt-conf data-config" type="date" value={consulta} onChange={e => setConsulta(e.target.value)}  />                        
                             </div>

                     <div class="caixa1">
                         <div class="fileira1">
                                 <div class="caixa1 cx-margem">
                                     <p class="desc4 texto">Hor??rio:</p>
                                     <input class="hora" type="text" value={horario} onChange={e => setHorario(e.target.value)} /> 
                                 </div>
                         </div>
                     </div>

                     <div class="fileira1">
                         <div class="fileira1">
                                 <div class="caixa1">
                                     <p class="desc4 texto">Forma de Pagamento:</p>
                                     <input class="pag-valor" type="text" value={pagamento} onChange={e => setPagamento(e.target.value)}  /> 
                                 </div>
                         </div>
                     </div>
                     <div class="fileira1">
                         <div class="caixa1">
                             <p class="desc4 texto">Valor total:</p>
                             <input class="pag-valor" type="text" value={valortotal} onChange={e => setValortotal(e.target.value)} /> 
                         </div>
                     </div>
             </div>
             </div>

     </div>

             <div class="fb-row  left">
                 
                        <button className='salvar texto margem-botoes-salvar' onClick={SalvarClick}>Salvar Altera????es</button> 
                        <button className='salvar texto margem-botoes-salvar' onClick={NovoClick}>Novo</button> 
            
             </div>

    </div>

     </section>

        </main>

    )


}