import { Link } from 'react-router-dom';
import './index.scss';

import {listarTodosAgendamentos, deletarAgendamento} from '../../api/pacienteApi'
import { useEffect, useState } from 'react';

import { confirmAlert } from 'react-confirm-alert';

export default function Index() {
    const [pacientes, setPacientes] = useState([]);
 
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
                        console.log('agendamento removido!');
                        carregarTodosAgendamentos();
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
                            <input type='text' className='tag-input' />
            </div>

            <div className='fb-row input-width'>
                <label className='label'> Data: </label>
                <input type='date' className='tag-input input-date'/>
            </div>

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
                                    <tr>
                                        
                                                    <td>{item.NOME}</td>
                                                    <td>{item.CPF}</td>
                                                    <td>{item.DATA}</td>
                                                    <td>{item.HORARIO}</td>
                                                    <td>{item.TOTAL}</td>
                                                    <td>{item.ID}</td>
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