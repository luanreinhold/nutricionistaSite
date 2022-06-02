import './index.scss'
import { Link } from 'react-router-dom';

export default function Index() {

    return (

    <main className="Page-Home">
        
    <section>
    <header class="header"> 
         <img class="logo" src="/images/logo" alt="logo" /> 
            <h1 class="sloogan"> Laura Santos</h1>
            <Link className='login' to="../login">Login</Link>
    </header>
    </section>


   <section class="f1 faixa flexboxrow">
        <div class="responsividade">
            <img class= "f1-doutora" src="/images/woman-doctor.jpg" alt=""/>
        </div>
        <div class="f1-texto">
            <h2 class="subtitulo-home"> Olá! sou a</h2>
            <h1 class="f1-prosa titulo-home"> Nutricionista Laura Santos CRN3 31080 </h1>
            <p class="texto-home">Nasci em Fortaleza, desde criança já tinha interesse na área da saúde e uma grande curiosidade ao estudar sobre os alimentos. Já crescida resolvi vir para São Paulo para estudar Nutrição.</p> 
            <p class="texto-home">Formada, iniciei a minha carreira profissional como estagiária e tive uma experiência maior com a suplementação alimentar.</p>
        </div>
    </section>



    <section class="f2 flexboxrow faixa">
        <div class="f2-texto fb-column">
            <h1 class="f2-titulo titulo-home"> Minha carreira </h1>
    
            <div className='hr'></div>

            <p class="texto-menu">Após ter me graduado em nutrição, fiz uma especialização em Exercício Aplicado à Prevenção e Tratamento de Doenças e Obesidade .</p> 
            <p class="texto-menu">Desde 2020 possuo minha clinica própria onde atendo meus pacientes, mas também faço atendimentos online.</p> 
            <p class="texto-menu">Já acompanhei mais de 150+ de clientes nesses últimos anos e obtivemos grandes resultados, minha missão é auxiliar meus clientes a conquistarem suas metas e objetivos de forma saudável e segura.</p>
        </div>
        <div><img class="f2-img" src="/images/professional-woman.jpg" alt="/"/> </div>
    </section>

    <section class="f7 flexboxrow">
        <div> <img src="/images/aspascima.png" alt="aspas pra cima"/> </div>
        <p class="texto-home"> Nem toda dieta resulta em transtorno alimentar, mas quase todo transtorno alimentar começa com uma dieta.” – Polivy e Herman, 1985</p>
        <div> <img src="/images/aspasbaixo.png" alt="aspas para baixo"/> </div>
    </section>



    <section class="f3 faixa fb-column align-center jc-center">

        <h1 class="titulo-home cor-f3"> Missão </h1>
        
        <div className='hrf3'></div>

        <div class="fb-row sub1-f3">
            <div class="sub1-f3-textos fb-column align-center">
                <p class="subtitulo-home cor-texto-f3"> Temos como missão proporcionar saúde e bem-estar aos meus pacientes, de forma humanizada. </p>
                <p class="subtitulo-home cor-texto-f3"> O atendimento individualizado e focado nas necessidades pessoais de cada paciente.</p>
                <p class="subtitulo-home cor-texto-f3"> Tratar os pacientes com excelência,empatia,respeito e inovação.</p>
            </div>
            <img src="/images/cereja.png" alt=""/>
        </div>
        
    </section>

    <section class="f4 faixa"> 
        <img class = "f4-imagem" src="/images/frutinhas.png" alt=""/>
        <h1 class="f4-titulo titulo-home">O que nossos clientes acham:</h1>
            <div class="f4-container flexboxrow">
                <div class="f4-bloco1 fb align-center">
                    <p>" Estava em um estado grave de obesidade, e uma amiga me falou da nutricionista Laura,então fui conhecer de perto os serviços dela, passou bastante segurança e excelência. Tive um bom resultado em pouco tempo." .
                    <b>-Stephan B.</b>
                    </p>
                </div>
                <div class="f4-bloco2 fb align-center">
                    <p>“Profissional competente, sempre com atitudes de incentivo e alegria! Estou muito feliz e satisfeita com as orientações!”
                    <b>-Maria Santos.</b>
                    </p>
                </div>
            </div>
    </section>

    <section class="f6 flexboxcolumn align-center jc-center">
            <h1 class="f6-titulo titulo-home">Metodologia com base científica para nutrição</h1>

        <div class="subsub-f6 flexboxrow jc-center">
            <div class="f6-texto sub1-f6 fb-column">
                <h2 class="subtitulo-home">O que é Nutrição?</h2>
                <p class="texto-home"> Nutrição é a ingestão de alimentos, tendo em conta as necessidades alimentares do corpo. </p>
                <p class="texto-home">  Uma boa nutrição - uma dieta adequada e equilibrada combinada com atividade física regular - é a "pedra fundamental" de uma boa saúde. </p>
                <p class="texto-home">  A má nutrição pode levar à redução da imunidade, aumento da suscetibilidade a doenças, prejudicando o desenvolvimento físico e mental e redução da productividade”. </p>
  
            </div>
            <div>
                <img class="f6-img" src="/images/salad-with-chicken-733x450.webp" alt="Comida Saudavel"/>
            </div>
        </div>
    </section>

    <section>
        <footer class="flexboxrow">
            <div><img class="footer-logo" src="/images/logo" alt=""/></div>
            <div>
                <p>
                    <b>
                    Avenida Pompéia, 684 – sala 31 – 2 andar 
                    Pompéia – São Paulo – SP – CEP: 05082-000
                    </b>
                </p>
            </div>
            <div class="footer-icons">

                <img src="/images/icone whatsapp.png" alt="icon whatsapp"/>
                <img src="/images/icone facebook.jpg" alt="icon facebook"/>
                <img src="/images/instagram-icone-noir.png" alt="icon instagram"/>
            </div>
        </footer>
    </section> 


    </main>

    )

}