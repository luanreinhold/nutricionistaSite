import './index.scss'
import { Link } from 'react-router-dom';
export default function Index() {
    
    return (
        <main className="Page-Login">

            <section class="faixa faixa1 fb-row">
            <img class="imagem-f1" src="/images/ffe3e452b6c0023c81707eba9375c69e.jpg" alt=""/>
            <div class="fb-column sub-f1">
            <h1 class="titulo">Acesse sua conta</h1>
            <div>
                <h2 class="subtitulo">E-mail</h2>
                <input class="tag-input" type="text" name="email" id=""/>
            </div>
            <div>
                <h2 class="subtitulo">Senha</h2>
                <input class="tag-input" type="text" name="senha" id=""/>
            </div>


            <Link className='botao' to="../admin"> Login </Link>
            <Link className='voltar' to="../"> Página Inicial </Link>
            </div>
            </section>
        </main>
    )
}