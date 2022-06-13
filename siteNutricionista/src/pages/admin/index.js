import './index.scss'
import { Link } from 'react-router-dom';

import {listarTodosAgendamentos} from '../../api/pacienteApi.js';
import { useEffect, useState } from 'react';



export default function Index() {
    const [pacientes, setPacientes] = useState([]);

    async function carregarTodosAgendamentos() {
        const resp = await listarTodosAgendamentos();
        setPacientes(resp);
    }

    useEffect(() => {
        carregarTodosAgendamentos();
    }, [])


    return (

        <main className="Page-Admin">
            <section class="fb-row faixa admin">

<div class="fb-column indice"> 
    <h1 class="menu-titulo">Menu</h1>
    <Link to="../historico" className='botao-f2'>Histórico de agendamentos</Link>
</div>

<div class="fb-column sub1-f2">


    <h1 class="titulo"> Agendamentos</h1>
    <h2 class="subtitulo">Aqui estão os últimos agendamentos que você criou</h2>

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

                    </tr>
                </thead>
                <tbody>     
                    {pacientes.map(item =>
                        <tr key={item.ID}>           
                            <td>{item.NOME}</td>
                            <td>{item.CPF}</td>
                            <td>{item.DATA && item.DATA.substr(0, 10)}</td>
                            <td>{item.HORA}</td>
                            <td>{item.VALORTOTAL}</td>
                            <td>{item.FICHA}</td>    
                        </tr>)}
                </tbody>
            </table>
            
            <Link className='novo-agendamento' to="../agendamentos"> 
                    <img src="/images/adicionar.svg"  alt=""/> <span>Novo</span>
            </Link>

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