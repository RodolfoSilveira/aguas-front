import React from 'react';
import './styles.css';

export interface Props {
  openModal: () => void
}

const Main: React.FC<Props> = ({ openModal }: Props) => (
  <div className="main">
    <section className="subscription" id="main-subscription">
      <div className="box-one">
        <h3>O Concurso</h3>
        <p>
          Concurso de fotografia para todos os técnicos do Inema para exposição
          de fotos que retratem a temática água
          (os desafios e as belezas encontradas em campo) pelos colaboradores.
          Além de uma apresentação cultural com artista de rua (poesia, musica, corde)
          que aborde a temática água.
        </p>
      </div>
      <div className="box-two" id="main-register">
        <div className="register-box">
          <div>
            <h3>Exposição de fotos</h3>
            <p>20 á 24/03/2017 na divisórias da Ouvidoria(em frente ao elevador)</p>
          </div>

          <div>
            <h3>Apresentação</h3>
            <p>20/03/2017 das 16:30h ás 17:30h</p>
          </div>
        </div>

        <button type="button" onClick={openModal}>
          Faça sua inscrição
        </button>
      </div>
    </section>

    <section className="about" id="main-about">
      <h3 className="title">Sobre</h3>

      <article>
        <h3>Objetivos</h3>
        <p>
          Promover a seleção de 100 fotografias produzidas por colaboradores do
          Inema em comemoração ao dia da água, que será elaborado um mural de
          fotos denominado de &quot;Varal das Águas&quot;.
        </p>
      </article>
      <article>
        <h3>Dos participante</h3>
        <p>
          Poderão participar do Concurso Fotográfico 2017. Todos os colaboradores
          do Instituto do Meio Ambiente e Recursos Hidricos - INEMA e Secretaria
          do Meio Ambiente - SEMA.
        </p>
      </article>

      <article>
        <h3>Das especificações das fotografias participantes</h3>
        <p>
          As fotografias devem abordar somente o tema OS DESAFIOS E AS BELEZAS RETRATADAS
          EM CAMPO REFERENTE À SITUAÇÃO HIDRICA, devendo ser obrigatoriamente a foto
          ser tirada em inspeção em campo a serviço do Inema.
        </p>
      </article>

      <article>
        <h3>Premiação final do concurso</h3>
        <p>
          As 05 (cinco) primeiras fotografia que for mais votado nas redes sociais
          (Facebook e Instagram) do Inema, receberá como prêmio.
        </p>
      </article>
    </section>

    <section className="rules" id="main-rules">
      <h3 className="title">Regras</h3>
      <p>
        Todas as fotos que retrate da temática água (tais como situação de secas
        ou excedentes hídricos, as belezas e os desafios de se trabalhar com os
        recursos hídricos etc.) serão bem vindas.
      </p>
      <ul className="list-rules">
        <li>As fotos devem ser originais e sem alterações.</li>
        <li>
          As fotos devem expor os ambientes visitados em inspeções técnicas
          realizadas durante inspeções pelo INEMA.
        </li>
        <li>Fotografias que incluam pessoas serão desclassificadas.</li>
        <li>As fotos devem ser enviadas com um formulário de inscrição preenchido.</li>
        <li>As fotografias do concurso se tornarão publicas.</li>
        <li>O fotógrafo da foto que receber mais votos ganhará um prêmio simbólico.</li>
        <li>Cada pessoa só poderá cadastrar um única foto.</li>
        <li>A votação será por meio das redes sociais do INEMA</li>
        <li>As vagas serão limitadas apenas 50.</li>
      </ul>
      <p>A foto vencedora irá ganhar um kit de brinde(Agenda, caneta, livro).</p>
    </section>
  </div>
);

export default Main;
