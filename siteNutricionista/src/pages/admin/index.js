import './index.scss'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import storage from 'local-storage'

import {listarTodosAgendamentos} from '../../api/pacienteApi.js';
import { useEffect, useState } from 'react';



export default function Index() {
    const [pacientes, setPacientes] = useState([]);
    const [usuario, setUsuario] = useState('');


    //-- apenas funções relacionadas a login
    const navigate = useNavigate();

    function sairClick() {
        storage.remove('usuario-logado');
        navigate('/')
    }
    //

    async function carregarTodosAgendamentos() {
        const resp = await listarTodosAgendamentos();
        setPacientes(resp);
    }

    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/')
        } else {
            const usuarioLogado = storage('usuario-logado')
            setUsuario(usuarioLogado.nome);
        }

    })

    //--------

    useEffect(() => {
        carregarTodosAgendamentos();
    }, [])


    return (

        <main className="Page-Admin">
            <section class="fb-row faixa admin">

<div class="fb-column indice"> 
    <h1 class="menu-titulo">Menu</h1>
    <Link to="../historico" className='botao-f2'>Agendamentos Edição</Link>
    <Link to="../agendamentos" className='botao-f2'>Novo Agendamento</Link>
                    

    <div className='botao-f2' onClick={sairClick}>Voltar Home</div>
</div>

<div class="fb-column sub1-f2">


    <h1 class="titulo"> Agendamentos</h1>
    <h2 class="subtitulo">Aqui estão os próximos agendamentos</h2>

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
<<<<<<< HEAD
=======

>>>>>>> 8ecf9a1c0f9c0ffd3ff6aab040ce20211fb661e9
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
    <div class="fb-row align-center" onClick={sairClick}>
        <img class="profile" src="/images/user-svgrepo-com.svg" alt=""/>
        {usuario}
    </div>

</div> 

</section>
        </main>

    )

}