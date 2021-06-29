import Meta from '../components/meta';
import React, { useState } from 'react';
import Modal from 'react-modal';
import Link from 'next/link';

// Modal.setAppElement('#root');
const solucoes = () => {
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
  const bg = {
    overlay: {
      background: '#FFFF00',
    },
  };

  return (
    <div>
      <Meta title="Soluções" />
      <div className="sol-page">
        <div className="sol-page__bg">
          <div className="container">
            <h1 className="sol-page__header">
              Inovação tecnológica em cada projeto
            </h1>
          </div>
          <div className="sol-page__content">
            <p className="sol-page__paragraph">
              A VP6 cria soluções que promovem a <b>inovação tecnológica</b> de
              acordo com a necessidade de cada empresa nos mais diversos
              segmentos, como o de Construção Civil, Bancário, Automotivo e
              vários outros.
            </p>

            <p className="sol-page__paragraph">
              Dê uma olhada no que já desenvolvemos até agora.
            </p>
            <div className="dobra-2__aligncenter">
              <div className="sol-page__button">
                <a href="/solucoes" href="#versolucoes">
                  ver soluções
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="sol-page__mercados">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h2 className="sol-page__mercados__header">Mercados</h2>
                <p className="sol-page__mercados__paragraph">
                  Estes são os mercados onde já promovemos a{' '}
                  <b>inovação tecnológica </b>com as nossas soluções:
                </p>
                <div className="sol-page__mercados__columns">
                  <ul className="space">
                    <li className="circle">Construção Civil</li>
                    <li className="circle">Bancário</li>
                    <li className="circle">Automotivo</li>
                  </ul>

                  <ul>
                    <li className="circle">Ramo de Alimentos</li>
                    <li className="circle">Administração de shopping</li>
                    <li className="circle">Gestão de Estacionamento</li>
                  </ul>
                </div>
                <p className="sol-page__mercados__paragraph">
                  A sua empresa é de outro nicho? Sem problemas. Nossas soluções
                  são personalizáveis para se ajustar às suas demandas!
                </p>
                <div className="sol-page__mercados__button">
                  <a href="/solucoes" href="#versolucoes">
                    ver soluções
                  </a>
                </div>
              </div>
              <div className="sol-page__mercados__card col-6">
                <div className="sol-page__mercados__bg">
                  <div className="sol-page__mercados__card-1">
                    <div className="sol-page__mercados__card-1-almoco"></div>
                  </div>
                  <div className="sol-page__mercados__card-2">
                    <div className="sol-page__mercados__card-2-construcao"></div>
                  </div>
                  <div className="sol-page__mercados__card-3">
                    <div className="sol-page__mercados__card-3-carro"></div>
                  </div>
                  <div className="sol-page__mercados__card-4">
                    <div className="sol-page__mercados__card-4-banco"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* dobra solucoes */}
        <div className="sol-page__solucoes">
          <h2 className="sol-page__solucoes__header" id="versolucoes">
            Soluções
          </h2>
          <p className="sol-page__solucoes__paragraph">
            Veja algumas soluções que já foram desenvolvidas pela VP6:
          </p>

          <div className="sol-page__solucoes__content">
            <div
              className="sol-page__solucoes__card"
              onClick={() => setModalOrcamento(true)}
            >
              <div className="sol-page__solucoes__card-money"></div>
              <div className="sol-page__solucoes__card-text">
                Orçamento empresarial
              </div>
              <button className="sol-page__solucoes__card__button">
                saiba mais
              </button>
            </div>

            <div
              className="sol-page__solucoes__card"
              onClick={() => setModalConstrucao(true)}
            >
              <div className="sol-page__solucoes__card-construcao"></div>
              <div className="sol-page__solucoes__card-text">
                Sistema para Construção Civil
              </div>
              <button className="sol-page__solucoes__card__button">
                saiba mais
              </button>
            </div>

            <div
              className="sol-page__solucoes__card sol-page__solucoes__card__remove-margin"
              onClick={() => setModalGerencial(true)}
            >
              <div className="sol-page__solucoes__card-gerencial"></div>
              <div className="sol-page__solucoes__card-text">
                Sistema de Informação Gerencial
              </div>
              <button className="sol-page__solucoes__card__button">
                saiba mais
              </button>
            </div>

            <div
              className="sol-page__solucoes__card"
              onClick={() => setModalAutomatizacao(true)}
            >
              <div className="sol-page__solucoes__card-automatizacao"></div>
              <div className="sol-page__solucoes__card-text">
                Automatização de relatórios
              </div>
              <button className="sol-page__solucoes__card__button">
                saiba mais
              </button>
            </div>

            <div
              className="sol-page__solucoes__card"
              onClick={() => setModalGestao(true)}
            >
              <div className="sol-page__solucoes__card-cobranca"></div>
              <div className="sol-page__solucoes__card-text">
                Gestão para setor de cobrança
              </div>
              <button className="sol-page__solucoes__card__button">
                saiba mais
              </button>
            </div>

            <div
              className="sol-page__solucoes__card sol-page__solucoes__card__remove-margin"
              onClick={() => setModalConciliacao(true)}
            >
              <div className="sol-page__solucoes__card-bancaria"></div>
              <div className="sol-page__solucoes__card-text">
                Conciliação bancária
              </div>
              <button className="sol-page__solucoes__card__button">
                saiba mais
              </button>
            </div>
          </div>
          <div className="sol-page__solucoes__integracoes">
            <h2 className="sol-page__solucoes__integracoes-header">
              Integrações já realizadas aos nosso sistemas
            </h2>
            <p className="sol-page__solucoes__integracoes-paragraph">
              Promovemos a <b>inovação tecnológica</b> por meio de sistemas
              facilmente integráveis ao seu ERP ou outros softwares que a sua
              empresa utiliza. Confira as integrações que já realizamos:
            </p>
            <div className="sol-page__solucoes__integracoes__row">
              <ul className="">
                <li className="sap">SAP</li>
                <li className="">Totvs RM</li>
                <li className="circle">UAU</li>
                <li className="circle remove-space">Mega Sistemas</li>
              </ul>

              <ul>
                <li className="circle">Sienge</li>
                <li className="wps">WPS</li>
                <li className="">Nepos</li>
                <li className="atak">Atak Sistemas</li>
              </ul>
            </div>
          </div>
        </div>
        {/* dobra não achou a solução */}
        <div className="sol-page__dontSoluciton">
          <h2 className="sol-page__dontSoluciton__header">
            Não achou a solução que precisava?
          </h2>
          <p className="sol-page__dontSoluciton__paragraph">
            A VP6 cria a solução que você precisa, personalizada para a
            realidade da sua empresa!
          </p>
          <div className="sol-page__dontSoluciton__cards">
            <div className="sol-page__dontSoluciton__cards-card">
              <div className="sol-page__dontSoluciton__cards-card-planilha"></div>
              <h3 className="sol-page__dontSoluciton__cards-card-header">
                Entendemos o seu negócio
              </h3>
              <p className="sol-page__dontSoluciton__cards-card-paragraph">
                Registramos juntos as necessidades da sua empresa e idealizamos
                a melhor forma de desenvolver o sistema para ajudá-la,
                levantando os requisitos necessários.
              </p>
            </div>
            {/* card-2 */}

            <div className="sol-page__dontSoluciton__cards-card">
              <div className="sol-page__dontSoluciton__cards-card-painel"></div>
              <h3 className="sol-page__dontSoluciton__cards-card-header">
                Desenvolvemos o projeto
              </h3>
              <p className="sol-page__dontSoluciton__cards-card-paragraph">
                Criamos o escopo do seu projeto e utilizamos metodologias ágeis
                para fazer as entregas. O cliente pode acompanhar o
                desenvolvimento do projeto a cada etapa concluída.
              </p>
            </div>

            <div className="sol-page__dontSoluciton__cards-card">
              <div className="sol-page__dontSoluciton__cards-card-graficos"></div>
              <h3 className="sol-page__dontSoluciton__cards-card-header">
                Fazemos o deploy versão Beta
              </h3>
              <p className="sol-page__dontSoluciton__cards-card-paragraph">
                Depois de realizarmos testes, fazemos o deploy do sistema
                desenvolvido em versão Beta. Novas versões serão liberadas
                constantemente.
              </p>
            </div>

            <div className="sol-page__dontSoluciton__cards-card">
              <div className="sol-page__dontSoluciton__cards-card-foguete"></div>
              <h3 className="sol-page__dontSoluciton__cards-card-header">
                Realizamos a implantação
              </h3>
              <p className="sol-page__dontSoluciton__cards-card-paragraph">
                Fazemos a implantação do sistema e buscamos melhorias. O cliente
                pode demandar ajustes e novos requisitos no sistema.
              </p>
            </div>
          </div>
        </div>
        {/* dobra cta */}
        <div className="dobra-cta-solucoes">
          <div className="dobra-cta-solucoes__bg">
            <div className="dobra-cta-solucoes__content">
              <p className="dobra-cta-solucoes__title">
                Melhore os processos da sua empresa
              </p>
              <p className="dobra-cta-solucoes__paragraph">
                Queremos desenvolver a solução que sua empresa precisa.
              </p>
              <div className="dobra-2__aligncenter">

                <div className="dobra-cta-solucoes__button">
                  <Link href="/contato">entrar em contato</Link>
                </div>
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
    </div>
  );
};

export default solucoes;
