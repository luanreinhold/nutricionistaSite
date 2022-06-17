import { Link } from 'react-router-dom';
import './index.scss';
import storage from 'local-storage'

import {listarTodosAgendamentos, deletarAgendamento, buscarNome} from '../../api/pacienteApi.js';
import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';

export default function Index() {
    const [usuario, setUsuario] = useState('');

    useEffect(() => {
        if (storage('usuario-logado')) {
            const usuarioLogado = storage('usuario-logado')
            setUsuario(usuarioLogado.nome);
        }
    }, [])
  

    const navigate = useNavigate();

    function editarAgendamento(id) {
        navigate(`/agendamentos/alterar/${id}`);
    }


    const [pacientes, setPacientes] = useState([]);

    const [filtroNome, setFiltroNome] = useState('');
    const [filtroData, setFiltroData] = useState('');

    async function buscarNomeClick() {
        const resp = await buscarNome(filtroNome, filtroData);
        console.log(resp)
        setPacientes(resp);
    }
 
    async function carregarTodosAgendamentos() {
        const resp = await listarTodosAgendamentos();
        setPacientes(resp);
    }

    async function deletarClick(id, nome) {

        confirmAlert({
            title: 'Deletar Agendamento',
            message: `Deseja deletar o agendamento de ${nome}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resp = await deletarAgendamento(id);
                        carregarTodosAgendamentos();
                        toast.dark('Agendamento removido com sucesso!');
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })
    }


    useEffect(() => {
        carregarTodosAgendamentos();
    }, [])

    return (
        <main className='Page-Historico'>
            
            <section class="fb-row faixa admin">

    <div class="fb-column indice"> 
    <h1 class="menu-titulo">Menu</h1>
    <Link to="../admin" className='botao-f2'> Agendamentos</Link>
    
    <Link to="../agendamentos" className='botao-f2'>Novo Agendamento</Link>
    </div>

    <div class="fb-column sub1-f2">

        <h1 class="titulo"> Histórico de Agendamentos</h1>
        <h2 class="subtitulo">Encontre seus agendamentos antigos</h2>

        
        <div className='fb-row subsub-pesquisar'> 

            <div className='fb-row input-width'>
                <label className='label'> Nome:  </label>
                            <input type='text' className='tag-input' placeholder='Digite o nome do paciente' value={filtroNome} onChange={e => setFiltroNome(e.target.value)} />
            </div>

            <div className='fb-row input-width'>
                <label className='label'> Data: </label>
                <input type='date' className='tag-input input-date' value={filtroData} onChange={e => setFiltroData(e.target.value)} />
            </div>

            <img src='/images/search-svgrepo-com (1).svg' className='img-delete-edit' alt='' onClick={buscarNomeClick}/> 

        </div>
        
        <div class="margem fb-column">


                    
                <table class="agendamento">
                    <thead>
                        <tr  class="cabecalho"> 
                            <td>Nome</td>
                            <td>CPF</td>
                            <td>Data</td>
                            <td>Horário</td>
                            <td>Valor Total</td>
                            <td>N° da ficha</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                                
                                {pacientes.map(item =>
                                    <tr key={item.ID}>
                                        
                                        <td>{item.NOME}</td>
                                        <td>{item.CPF}</td>
                                        <td>{item.DATA && item.DATA.substr(0, 10)}</td>
                                        <td>{item.HORA}</td>
                                        <td>{item.VALORTOTAL}</td>
                                        <td>{item.FICHA}</td>
                                        <td>
                                        <button class="delete-edit"> <img class="img-delete-edit" src="/images/basic-edit-pencil-svgrepo-com.svg" alt="" onClick={() => editarAgendamento(item.FICHA)}/></button>
                                        </td>
                                        <td>    <button class="delete-edit" onClick={() => deletarClick(item.FICHA, item.NOME)}> <img class="img-delete-edit" src="/images/basic-delete-ui-svgrepo-com.svg" alt=""/></button></td>
                                                       
                                    </tr>

                                    )}
                                    

                        
                    </tbody>
                </table>

        </div>
    </div>

    <div class="logout">
        <div class="fb-row align-center">
            <img class="profile" src="/images/user-svgrepo-com.svg" alt=""/>
            {usuario}
        </div>
    </div> 

</section>
            
        </main>
    )
}