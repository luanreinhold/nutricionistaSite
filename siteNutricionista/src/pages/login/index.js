import './index.scss'
import { Link } from 'react-router-dom'
import { login } from '../../api/usuarioApi.js'

import storage from 'local-storage'
import LoadingBar from 'react-top-loading-bar'
import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

export default function Index() {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState('');

    const navigate = useNavigate();
    const ref = useRef();


    //login 
    useEffect(() => {
        if (storage('usuario-logado')) {
            navigate('/admin')
        }
    }, [])

    async function entrarClick() {
        ref.current.continuousStart();
        setCarregando(true);
        try {
            const r = await login(email, senha)
            storage('usuario-logado', r )
            setTimeout(() => {
                navigate('/admin');
            }, 3000);
                

        } catch (err) {
            ref.current.complete();
            setCarregando(false);
            if (err.response.status === 401){
                setErro(err.response.data.erro);
            }
        }
    }

    return (
        <main className="Page-Login">
              <LoadingBar color='#2BC8A2' ref={ref} />


            <section class="faixa faixa1 fb-row">
            <img class="imagem-f1" src="/images/ffe3e452b6c0023c81707eba9375c69e.jpg" alt=""/>
            <div class="fb-column sub-f1">
            <h1 class="titulo">Acesse sua conta</h1>
            <div>
                <h2 class="subtitulo"> E-mail</h2>
                <input class="tag-input" type="text" name="email"  value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            
            <div>
                <h2 class="subtitulo">Senha</h2>
                <input class="tag-input" type="password" name="senha"  value={senha} onChange={ e => setSenha(e.target.value)}/>
            </div>


            <button className='botao'onClick={entrarClick} disabled={carregando}> Login </button>
            <div className='erro'>
                {erro}
            </div>
            <Link className='voltar' to="../"> Página Inicial </Link>
            </div>
            </section>
        </main>
    )
}