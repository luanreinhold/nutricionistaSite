import { Link } from 'react-router-dom';
import './index.scss';

import {listarTodosAgendamentos, deletarAgendamento, buscarNome} from '../../api/pacienteApi.js';
import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';

export default function Index() {
    const [pacientes, setPacientes] = useState([]);

    const [filtro, setFiltro] = useState('');

    async function buscarNomeClick() {
        const resp = await buscarNome(filtro);
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
    </div>

    <div class="fb-column sub1-f2">

        <h1 class="titulo"> Histórico de Agendamentos</h1>
        <h2 class="subtitulo">Encontre seus agendamentos antigos</h2>

        
        <div className='fb-row subsub-pesquisar'> 

            <div className='fb-row input-width'>
                <label className='label'> Nome:  </label>
                            <input type='text' className='tag-input' placeholder='Digite o nome do paciente' value={filtro} onChange={e => setFiltro(e.target.value)} />
            </div>

            <div className='fb-row input-width'>
                <label className='label'> Data: </label>
                <input type='date' className='tag-input input-date'/>
            </div>

            <img src='/images/search-svgrepo-com (1).svg' className='img-delete-edit' onClick={buscarNomeClick}/> 

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
                    <tbody>
                                
                                {pacientes.map(item =>
                                    <tr key={item.ID}>
                                        
                                                    <td>{item.NOME}</td>
                                                    <td>{item.CPF}</td>
                                                    <td>{item.DATA}</td>
                                                    <td>{item.HORA}</td>
                                                    <td>{item.VALORTOTAL}</td>
                                                    <td>{item.FICHA}</td>
                                                    <td>
                                                    <Link to="../agendamentos" className='delete-edit'><button class="delete-edit"> <img class="img-delete-edit" src="/images/basic-edit-pencil-svgrepo-com.svg" alt=""/></button></Link>
                                                    </td>
                                                    <td>    <button class="delete-edit" onClick={() => deletarClick(item.ID, item.NOME)}> <img class="img-delete-edit" src="/images/basic-delete-ui-svgrepo-com.svg" alt=""/></button></td>
                                                       
                                    </tr>

                                    )}
                                    

                        
                    </tbody>
                </table>

        </div>
    </div>

    <div class="logout">
        <div class="fb-row align-center">
            <img class="profile" src="/images/user-svgrepo-com.svg" alt=""/>
            <h1>Dra. Laura</h1>
        </div>
        <Link to="../"> Sair</Link>
    </div> 

</section>
            
        </main>
    )
}