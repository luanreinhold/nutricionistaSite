import './index.scss'
import { Link } from 'react-router-dom';
export default function Index() {

    return (

        <main className="Page-Admin">
            <section class="fb-row faixa admin">

<div class="fb-column indice"> 
<h1 class="menu-titulo">Menu</h1>
<Link to="../agendamentos" className='botao-f2'>Histórico de agendamentos</Link>
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
                         <td></td>
                         <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Paciente 1</td>
                        <td> 484 491 398 05</td>
                        <td>01/05/20222</td>
                        <td> 15:30</td>
                        <td>150,00</td>
                        <td>01</td>
                        <td>
                        <Link to="../agendamentos" className='delete-edit'><button class="delete-edit"> <img class="img-delete-edit" src="/images/basic-edit-pencil-svgrepo-com.svg" alt=""/></button></Link>
                        </td>
                        <td><button class="delete-edit"> <img class="img-delete-edit" src="/images/basic-delete-ui-svgrepo-com.svg" alt=""/></button></td>
                        
                    </tr>
                    <tr>
                        <td> Paciente 2</td>
                        <td> 489 421 778 41</td>
                        <td>01/05/20222</td>
                        <td> 15:30</td>
                        <td>150,00</td>
                        <td>02</td>
                        <td>
                        <Link to="../agendamentos" className='delete-edit'><button class="delete-edit"> <img class="img-delete-edit" src="/images/basic-edit-pencil-svgrepo-com.svg" alt=""/></button></Link>
                        </td>
                        <td>    <button class="delete-edit"> <img class="img-delete-edit" src="/images/basic-delete-ui-svgrepo-com.svg" alt=""/></button></td>
                    </tr>
                </tbody>
            </table>
            
            <Link className='novo-agendamento' to="../agendamentos"> 
                    <img src="/images/adicionar.svg" alt=""/> <span>Novo</span>
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