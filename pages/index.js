import React, { useState } from 'react';
import Modal from 'react-modal';
export default function Home() {
  const [modalOrcamento, setModalOrcamento] = useState(false);
  const [modalAutomatizacao, setModalAutomatizacao] = useState(false);
  const [modalConstrucao, setModalConstrucao] = useState(false);
  const [modalGerencial, setModalGerencial] = useState(false);
  const [modalGestao, setModalGestao] = useState(false);
  const [modalConciliacao, setModalConciliacao] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',

      borderRadius: '10px',
      padding: '60px 60px 60px 60px',
      // overlfow: 'hidden',
    },
    overlay: {
      background: '#000E2B80',
    },
  };
  const stylesConstrucao = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',

      borderRadius: '10px',
      padding: '60px 60px 60px 60px',
      height: '740px', // <-- This sets the height
      overlfowY: 'scroll', // <-- This tells the modal to scrol
    },
    overlay: {
      background: '#000E2B80',
    },
  };
  return (
    <>
      <div>
        <div className="hero-home">
          <div className="container">
            <div className="hero-home__content-header">
              <h1 className="hero-home__text-box">
                Desenvolvimento de software
              </h1>
              <h2 className="hero-home__text-box-2">
                customizado para os processos da sua empresa
              </h2>
              <div className="hero-home__paragraph">
                <p className="hero-home__paragraph-text">
                  A VP6 é uma <b>software house</b> que desenvolve ferramentas
                  para <b>otimização de processos empresariais</b>.
                </p>
                <p className="hero-home__paragraph-text">
                  Construímos soluções personalizadas para cada cliente e
                  integráveis a outras ferramentas para fortalecer as operações
                  do seu negócio, aliando tecnologia à performance.
                </p>
                <button className="hero-home__button-faleConosco">
                  Fale Conosco
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dobra-2">
          <div className="container text-center">
            <p className="dobra-2__title">Serviços</p>
            <div className="dobra-2__paragraph">
              <p className="dobra-2__paragraph-text">
                Por meio de métodos ágeis, a <b>software house</b> VP6 se adapta
                à necessidade de cada cliente para criar soluções sob medida.
                Veja alguns exemplos de serviços que prestamos:
              </p>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="dobra-2__cards col-3 mt-1">
                <div className="dobra-2__cards-card">
                  <div className="dobra-2__cards-head">
                    <div className="dobra-2__cards-head-simbol"></div>
                    <div className="dobra-2__cards-head-title">
                      Centralize informações
                    </div>
                  </div>
                  <p className="dobra-2__cards-text">
                    Criamos soluções em <b>business intelligence</b> para que
                    você tenha mais agilidade e embasamento na hora de tomar
                    decisões. Nossas ferramentas permitem a importação de dados
                    de outros softwares e, com isso, você centraliza todas as
                    informações valiosas em um único lugar.
                  </p>
                </div>
              </div>

              <div className="dobra-2__cards col-3 mt-1">
                <div className="dobra-2__cards-card">
                  <div className="dobra-2__cards-head">
                    <div className="dobra-2__cards-head-simbol"></div>
                    <div className="dobra-2__cards-head-title">
                      Transforme dados
                    </div>
                  </div>
                  <p className="dobra-2__cards-text">
                    Facilitamos o trabalho de <b> Data Analysis</b> na sua
                    empresa através da limpeza, transformação e{' '}
                    <b>modelagem de dados.</b>
                    Criamos ferramentas para melhorar a confiabilidade nas
                    informações geradas e tornar a sua{' '}
                    <b>gestão mais estratégica.</b>
                  </p>
                </div>
              </div>
              <div className="dobra-2__cards col-3 mt-1">
                <div className="dobra-2__cards-card">
                  <div className="dobra-2__cards-head">
                    <div className="dobra-2__cards-head-simbol"></div>
                    <div className="dobra-2__cards-head-title">
                      Automatize processos
                    </div>
                  </div>
                  <p className="dobra-2__cards-text">
                    Desenvolvemos sistemas para uma <b>gestão estratégica</b>{' '}
                    com foco em automatizar processos. Criamos soluções
                    completas de acordo com as operações de cada negócio, para
                    que os colaboradores não precisem mais perder tanto tempo
                    com tarefas rotineiras.
                  </p>
                </div>
              </div>
              <div className="dobra-2__cards col-3 mt-1">
                <div className="dobra-2__cards-card">
                  <div className="dobra-2__cards-head">
                    <div className="dobra-2__cards-head-simbol"></div>
                    <div className="dobra-2__cards-head-title">
                      Complemente o seu ERP
                    </div>
                  </div>
                  <p className="dobra-2__cards-text">
                    Somos uma <b>software house</b> que desenvolve ferramentas
                    personalizadas e integráveis, e nós vamos aonde o seu ERP
                    não vai. Elimine a necessidade de criar e administrar outras
                    planilhas para controlar todos os{' '}
                    <b>dados da sua empresa.</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="dobra-2__aligncenter">
              <button className="dobra-2__button">Fale Conosco</button>
            </div>
          </div>
        </div>
        <div className="dobra-3">
          <div className="container">
            <h2 className="dobra-3__title">Tecnologias</h2>
            <p className="dobra-3__paragraph">
              Tecnologias mais utilizadas no <b>desenvolvimento de software </b>
              da VP6:
            </p>

            <div className="tec-page__dobra-3__painel">
              <div className="tec-page__dobra-3__painel-card">
                <div className="tec-page__dobra-3__painel-logoPython"></div>
                <p>Python</p>
              </div>

              <div className="tec-page__dobra-3__painel-card">
                <div className="tec-page__dobra-3__painel-logoNode"></div>
                <p>Node</p>
              </div>

              <div className="tec-page__dobra-3__painel-card">
                <div className="tec-page__dobra-3__painel-logoSql"></div>
                <p>SQL</p>
              </div>

              <div className="tec-page__dobra-3__painel-card">
                <div className="tec-page__dobra-3__painel-logoAws"></div>
                <p>AWS</p>
              </div>
              <div className="dobra-3__painel-itensCenter">
                <div className="tec-page__dobra-3__painel-card">
                  <div className="tec-page__dobra-3__painel-logoReact"></div>
                  <p>React</p>
                </div>

                <div className="tec-page__dobra-3__painel-card">
                  <div className="tec-page__dobra-3__painel-logoAngular"></div>
                  <p>Angular</p>
                </div>

                <div className="tec-page__dobra-3__painel-card">
                  <div className="tec-page__dobra-3__painel-logoPanda"></div>
                  <p>Panda</p>
                </div>
              </div>
            </div>
          </div>

          <div className="dobra-2__aligncenter">
            <button className="dobra-2__button">Saiba Mais</button>
          </div>
        </div>
        <div className="dobra-4">
          <div className="dobra-4__bg">
            <div className="dobra-4__bg-image"></div>
            <div className="container">
              <h2 className="dobra-4__title">Soluções</h2>
              <p className="dobra-4__paragraph">
                Desenvolvemos soluções exclusivas para a necessidade de cada
                empresa nos mais diversos segmentos.{' '}
                <b>Veja algumas soluções que já desenvolvemos:</b>
              </p>
              <div
                className="dobra-4__solucoes"
                onClick={() => setModalOrcamento(true)}
              >
                <div className="dobra-4__solucoes-empr"></div>
                <p className="dobra-4__solucoes-p">Orçamento empresarial</p>
              </div>
              <div
                className="dobra-4__solucoes mt-5"
                onClick={() => setModalConstrucao(true)}
              >
                <div className="dobra-4__solucoes-civil"></div>
                <p className="dobra-4__solucoes-p">
                  Sistema para Construção Civil
                </p>
              </div>
              <div
                className="dobra-4__solucoes mt-5"
                onClick={() => setModalGerencial(true)}
              >
                <div className="dobra-4__solucoes-gerencial"></div>
                <p className="dobra-4__solucoes-p">
                  Sistema de Informação Gerencial
                </p>
              </div>

              <div
                className="dobra-4__solucoes mt-5"
                onClick={() => setModalAutomatizacao(true)}
              >
                <div className="dobra-4__solucoes-relatorio"></div>
                <p className="dobra-4__solucoes-p">
                  Automatização de relatórios
                </p>
              </div>

              <div
                className="dobra-4__solucoes mt-5"
                onClick={() => setModalGestao(true)}
              >
                <div className="dobra-4__solucoes-cobranca"></div>
                <p className="dobra-4__solucoes-p">
                  Gestão para setor de cobrança
                </p>
              </div>

              <div
                className="dobra-4__solucoes mt-5"
                onClick={() => setModalConciliacao(true)}
              >
                <div className="dobra-4__solucoes-conciliacao"></div>
                <p className="dobra-4__solucoes-p">Conciliação bancária</p>
              </div>
              <button className="dobra-4__button">Saiba Mais</button>
            </div>
          </div>
        </div>

        <div className="dobra-5 row">
          <div className="dobra-5__clientes col-6 col-12-m">
            <h2 className="dobra-5__clientes-title">Clientes</h2>
            <p className="dobra-5__clientes-paragraph">
              Temos orgulho de todos os nossos projetos.{' '}
              <b>
                Veja alguns clientes que confiaram na VP6 para otimizar os seus
                processos:
              </b>
            </p>
          </div>

          <div className="dobra-5__painel col-6 col-12-m">
            <div className="dobra-5__painel-AppPonto"></div>
            <div className="dobra-5__painel-Inter"></div>
            <div className="dobra-5__painel-Carapreta"></div>
            <div className="dobra-5__painel-Cea"></div>
            <div className="dobra-5__painel-Cyrela"></div>
            <div className="dobra-5__painel-Direional"></div>
            <div className="dobra-5__painel-Fricasa"></div>
            <div className="dobra-5__painel-Indigo"></div>
            <div className="dobra-5__painel-JcContijo"></div>
            <div className="dobra-5__painel-Mrv"></div>
            <div className="dobra-5__painel-Patrimar"></div>
            <div className="dobra-5__painel-Pif-Paf"></div>
            <div className="dobra-5__painel-Plano"></div>
            <div className="dobra-5__painel-Plena"></div>
            <div className="dobra-5__painel-Precon"></div>
            <div className="dobra-5__painel-Tial"></div>
          </div>
        </div>

        <div className="dobra-cta">
          <div className="dobra-cta__bg">
            <div className="dobra-cta__content">
              <p className="dobra-cta__title">Fale Conosco</p>
              <p className="dobra-cta__paragraph">
                Quer melhorar os processos da sua empresa?{' '}
                <b>Queremos te ajudar a encontrar uma solução.</b>
              </p>
              <div className="dobra-2__aligncenter">
                <button className="dobra-cta__button">
                  seja nosso próximo case
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* modal orcamento empresarial */}
        <Modal
          isOpen={modalOrcamento}
          style={customStyles}
          className="modalOrcamento"
          onRequestClose={() => {
            setModalOrcamento(false);
          }}
          // shouldCloseOnOverlayClick={false}
        >
          <div className="solucoes__modal">
            <div className="row">
              <div className="col-6">
                <div className="solucoes__modal__cardHeader">
                  <div className="sol-page__solucoes__card-money"></div>
                  <h2 className="solucoes__modal__cardHeader-header">
                    Orçamento empresarial
                  </h2>
                </div>
                <p className="solucoes__modal__cardHeader-paragraph">
                  O nosso sistema de orçamento empresarial automatiza processos
                  para que a sua equipe tenha um ganho operacional
                  significativo. Com o nosso sistema de orçamento empresarial,
                  você consegue envolver todas as áreas da empresa para saber o
                  quanto pode gastar e ter mais planejado quanto você vai ter de
                  lucro.
                </p>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Lance com facilidade as suas receitas e receba demonstrativos
                  ou relatórios contábeis, como:
                </p>

                <ul className="solucoes__modal__ul">
                  <li className="modal-li">
                    DRE Previsto x Realizado Automatizado;
                  </li>
                  <li className="modal-li">
                    Fluxo de Caixa Previsto x Realizado Automatizado;
                  </li>
                  <li className="modal-li">Balanço;</li>
                  <li className="modal-li">Dentre outros.</li>
                </ul>
              </div>
              <div className="col-6">
                <div className="solucoes__modal__orcamentoModal"></div>
              </div>
            </div>
          </div>
          <div
            className="solucoes__modal__closeModal"
            onClick={() => setModalOrcamento(false)}
          ></div>
        </Modal>

        {/* modal automatizacao relatórios */}
        <Modal
          isOpen={modalAutomatizacao}
          style={customStyles}
          onRequestClose={() => {
            setModalAutomatizacao(false);
          }}
          // shouldCloseOnOverlayClick={false}
        >
          <div className="solucoes__modal">
            <div className="row">
              <div className="col-6">
                <div className="solucoes__modal__cardHeader">
                  <div className="sol-page__solucoes__card-automatizacao"></div>
                  <h2 className="solucoes__modal__cardHeader-header">
                    Automatização de relatórios
                  </h2>
                </div>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Se na sua empresa é preciso despender horas de trabalho dos
                  colaboradores para gerar relatórios, essa solução foi feita
                  para você. Com o nosso sistema de Automatização de Relatórios,
                  você consegue os dados que precisa em poucos minutos.
                </p>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Assim, os seus colaboradores não precisam ficar alocados em
                  uma demanda operacional e podem empregar o seu tempo em
                  atividades que trarão melhores resultados. Facilite a
                  realização de processos burocráticos e ganhe agilidade,
                  produtividade e reduza custos.
                </p>
              </div>
              <div className="col-6">
                <div className="solucoes__modal__automatizacaoModal"></div>
              </div>
            </div>
          </div>
          <div
            className="solucoes__modal__closeModal"
            onClick={() => setModalAutomatizacao(false)}
          ></div>
        </Modal>
        {/* modal sistema gerencial */}
        <Modal
          isOpen={modalGerencial}
          style={customStyles}
          className="modalGerencial"
          onRequestClose={() => {
            setModalGerencial(false);
          }}
          // shouldCloseOnOverlayClick={false}
        >
          <div className="solucoes__modal">
            <div className="row">
              <div className="col-7">
                <div className="solucoes__modal__cardHeader">
                  <div className="sol-page__solucoes__card-gerencial"></div>
                  <h2 className="solucoes__modal__cardHeader-header">
                    Sistema de Informação Gerencial
                  </h2>
                </div>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Ferramenta para investir em Business Intelligence e melhorar o
                  controle dos processos da sua empresa. Nós geramos uma série
                  de insumos e informações consistentes para apoiar o seu
                  trabalho como gestor.
                </p>
                <p className="solucoes__modal__cardHeader-paragraph">
                  O nosso Sistema de Informação Gerencial vai ajudar você a ter
                  uma visão sistêmica dos seus processos, para que você consiga
                  identificar áreas que precisam de melhorias. Trate dados
                  valiosos para os mais diversos processos (Back Office,
                  Produtivo, Comercial e muito mais).Assim, os seus
                  colaboradores não precisam ficar alocados em uma demanda
                  operacional e podem empregar o seu tempo em atividades que
                  trarão melhores resultados. Facilite a realização de processos
                  burocráticos e ganhe agilidade, produtividade e reduza custos.
                </p>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Nosso objetivo é que você tenha uma leitura facilitada das
                  informações gerenciais importantes para traçar boas
                  estratégias e obter melhores resultados. Faça uma abordagem
                  efetiva dos seus dados e torne suas decisões mais assertivas!
                </p>
              </div>
              <div className="col-5 col-12-m col-12-s">
                <div className="solucoes__modal__gerencialModal"></div>
              </div>
            </div>
          </div>
          <div
            className="solucoes__modal__closeModal"
            onClick={() => setModalGerencial(false)}
          ></div>
        </Modal>

        {/* modal sistema para construção civil */}
        <Modal
          isOpen={modalConstrucao}
          style={stylesConstrucao}
          className="modalConstrucao"
          onRequestClose={() => {
            setModalConstrucao(false);
          }}
          // shouldCloseOnOverlayClick={false}
        >
          <div className="solucoes__modal">
            <div className="solucoes__modal__cardHeader">
              <div className="sol-page__solucoes__card-construcao"></div>
              <div className="solucoes__modal__cardHeader-column">
                <h2 className="solucoes__modal__cardHeader__construcao-header">
                  Sistema para Construção Civil
                </h2>
                <p className="solucoes__modal__cardHeader__construcao-rodape">
                  Sistema para crédito imobiliário/associativo
                </p>
              </div>
            </div>
            <p className="solucoes__modal__cardHeader__construcao-paragraph">
              Este sistema consolida todas as informações do crédito
              imobiliário/associativo para facilitar a leitura e o entendimento
              dos arquivos enviados pela CAIXA. Com isso, auxiliamos a sua
              equipe no gerenciamento de dados, a fim de otimizar os processos
              da sua obra.
            </p>
            <p className="solucoes__modal__cardHeader__construcao-paragraph">
              O banco de dados gerado pela VP6 é facilmente integrável ao ERP da
              sua empresa para que você tenha:
            </p>

            <ul className="solucoes__modal__ul">
              <li className="modal-li">Dashboard de acompanhamento;</li>
              <li className="modal-li">Melhor gestão da Inadimplência;</li>
              <li className="modal-li">Baixa Automática de Parcelas;</li>
              <li className="modal-li">DRE com POC;</li>
              <li className="modal-li">
                Fluxo de Caixa com a memória de cálculo da Caixa Econômica;
              </li>
              <li className="modal-li">Dentre outros.</li>
            </ul>
          </div>
          <div className="solucoes__modal__construcaoModal"></div>
          <div
            className="solucoes__modal__closeModal"
            onClick={() => setModalConstrucao(false)}
          ></div>
        </Modal>
        {/* modal gestor de cobrança */}
        <Modal
          isOpen={modalGestao}
          style={customStyles}
          onRequestClose={() => {
            setModalGestao(false);
          }}
          // shouldCloseOnOverlayClick={false}
        >
          <div className="solucoes__modal">
            <div className="row">
              <div className="col-6">
                <div className="solucoes__modal__cardHeader">
                  <div className="sol-page__solucoes__card-cobrancaModal"></div>
                  <h2 className="solucoes__modal__cardHeader-header">
                    Gestão para setor de cobrança
                  </h2>
                </div>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Essa solução é perfeita para empresas que possuem um grande
                  volume de clientes. Com o nosso sistema, você consegue ter
                  toda a cobrança da sua organização sistematizada.
                </p>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Faça o controle das contas a receber, gerencie com efetividade
                  as dívidas dos seus clientes e estruture, a partir disso, a
                  sua régua de cobranças. Configure e-mails, recados
                  personalizados e consiga encaminhar contatos direto para o seu
                  departamento jurídico.
                </p>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Visualize de maneira simples no nosso sistema as ligações
                  telefônicas recebidas e ações realizadas em cima delas e tenha
                  mais clareza sobre a performance de cada colaborador da sua
                  equipe!
                </p>
              </div>
              <div className="col-6">
                <div className="solucoes__modal__cobrancaModal"></div>
              </div>
            </div>
          </div>
          <div
            className="solucoes__modal__closeModal"
            onClick={() => setModalGestao(false)}
          ></div>
        </Modal>

        {/* modal conciliação bancaria */}
        <Modal
          isOpen={modalConciliacao}
          style={customStyles}
          onRequestClose={() => {
            setModalConciliacao(false);
          }}
        >
          <div className="solucoes__modal">
            <div className="row">
              <div className="col-6">
                <div className="solucoes__modal__cardHeader">
                  <div className="sol-page__solucoes__card-bancaria"></div>
                  <h2 className="solucoes__modal__cardHeader-header">
                    Conciliação bancária
                  </h2>
                </div>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Solução feita para empresas que trabalham com várias contas
                  correntes. Importe lançamentos do seu extrato automaticamente
                  e mantenha seu fluxo de caixa atualizado.
                </p>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Saiba quais clientes pagaram e tenha toda a sua movimentação
                  bancária refletida no nosso sistema. Nós geramos e
                  interpretamos arquivos bancários para que você economize tempo
                  e não precise registrar pagamentos e recebimentos manualmente.
                </p>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Automatize os lançamentos da sua empresa e mantenha os saldos
                  das contas bancárias em dia!
                </p>
              </div>
              <div className="col-6">
                <div className="solucoes__modal__conciliacaoModal"></div>
              </div>
            </div>
          </div>
          <div
            className="solucoes__modal__closeModal"
            onClick={() => setModalConciliacao(false)}
          ></div>
        </Modal>
      </div>
    </>
  );
}
