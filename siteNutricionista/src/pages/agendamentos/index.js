import './index.scss'
import { Link } from 'react-router-dom';
export default function Index() {

    return (

        <main className="Page_Agendamento">

<section class="pagina fb-row">

<div class="indice fb-column">

            <Link className='Menu' to="../admin">
                <div class="fb-row align-center jc-center">
                    <img class="home-img" src="/images/home-svgrepo-com.svg" alt=""/>
                    <p class="texto">Voltar ao Menu</p>
                </div>
            </Link>
       </div>


    <div class="fb-column editando jc-center">
         <div class="titulos">
             <div>
                 <h1 class="titulo">Edição</h1>
                 <h2 class="subtitulo">Edite seus agendamentos aqui</h2>
                 <h2 class="subtitulo">Ficha Nº X</h2>

             </div>
         </div>

         <div class="caixa1 jc-center">
             <h3 class="texto"> Dados do paciente</h3>
             <div class="fileira1">

                     <div class="caixa1">
                         <p class="desc1 texto">Nome</p>
                         <input class="nome" type="text"/>
                     </div>

                 <div class="caixa1">
                     <p class="desc2 texto">Telefone</p>
                     <input class="ficha" type="text"/>
                 </div>

             </div>
         </div>

         <div class="caixa1">
             <div class="fileira1">
                 <div class="caixa1">
                     <p class="desc1 texto">Data de nascimento</p>
                     <input class="dt-conf" type="date"/>
                 </div>

                 <div class="caixa1">
                     <p class="desc3 texto">Gênero</p>
                     <select  class="genero-CPF" name="Selecione" id="">
                         <option value="Selecione">Selecione</option>
                         <option value="Feminino">Feminino</option>
                         <option value="Masculino">Masculino</option>
                     </select>
                 </div>

                 <div class="caixa1">
                     <p class="desc3 texto">CPF</p>
                     <input class="genero-CPF" type="text"/>
                 </div>
             </div>
         </div>

         <div class="caixa1">

             <div class="fileira1">
                     <div class="caixa1">
                         <p class="desc1 texto">Obsevações:</p>
                         <textarea class="obs" name="observações" id="" cols="30" rows="10"></textarea>
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
                                 <input class="dt-conf" type="date"/>
                             </div>

                     <div class="caixas1">
                         <div class="fileira1">
                                 <div class="caixa1">
                                     <p class="desc4 texto">Horário:</p>
                                     <input class="hora" type="time"/>
                                 </div>
                         </div>
                     </div>

                     <div class="fileira1">
                         <div class="fileira1">
                                 <div class="caixa1">
                                     <p class="desc4 texto">Forma de Pagamento:</p>
                                     <input class="pag-valor" type="text"/>
                                 </div>
                         </div>
                     </div>
                     <div class="fileira1">
                         <div class="caixa1">
                             <p class="desc4 texto">Valor total:</p>
                             <input class="pag-valor" type="text"/>
                         </div>
                     </div>
             </div>
             </div>

     </div>

             <a class="salvar texto" href="../../pages/admin-menu/admin.html">
                 <div class="fb-row">
                     <img class="save-img" src="/images/save-svgrepo-com (1).svg" alt=""/>
                     <p>Salvar Alterações</p>
                 </div>
             </a>

    </div>

         <div class="fb-row align-center user">
                 <img class="profile" src="/images/user-svgrepo-com.svg" alt=""/>
                 <h1 class="texto">Dra. Laura</h1>
         </div>


     </section>

        </main>

    )


}