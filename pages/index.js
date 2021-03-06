import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Link from 'next/link';

export default function Home() {
  const [modalOrcamento, setModalOrcamento] = useState(false);
  const [modalAutomatizacao, setModalAutomatizacao] = useState(false);
  const [modalConstrucao, setModalConstrucao] = useState(false);
  const [modalGerencial, setModalGerencial] = useState(false);
  const [modalGestao, setModalGestao] = useState(false);
  const [modalConciliacao, setModalConciliacao] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      document.getElementById('Painel-1').classList.add('none');
      document.getElementById('Painel-2').classList.remove('none');
    }, 4000);

    const id2 = setInterval(() => {
      document.getElementById('Painel-2').classList.add('none');
      document.getElementById('Painel-1').classList.remove('none');
    }, 7000);
    return () => {
      clearInterval(id);
      clearInterval(id2);
    };
  }, []);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',

      borderRadius: '10px',

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
                  A VP6 ?? uma <b>software house</b> que desenvolve ferramentas
                  para <b>otimiza????o de processos empresariais</b>.
                </p>
                <p className="hero-home__paragraph-text">
                  Constru??mos solu????es personalizadas para cada cliente e
                  integr??veis a outras ferramentas para fortalecer as opera????es
                  do seu neg??cio, aliando tecnologia ?? performance.
                </p>
                <div className="hero-home__button-faleConosco">
                  <Link href="/contato/#PreencherForm">Fale Conosco</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dobra-2">
          <div className="container text-center">
            <p className="dobra-2__title">Servi??os</p>
            <div className="dobra-2__paragraph">
              <p className="dobra-2__paragraph-text">
                Por meio de m??todos ??geis, a <b>software house</b> VP6 se adapta
                ?? necessidade de cada cliente para criar solu????es sob medida.
                Veja alguns exemplos de servi??os que prestamos:
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
                      Centralize informa????es
                    </div>
                  </div>
                  <p className="dobra-2__cards-text">
                    Criamos solu????es em <b>business intelligence</b> para que
                    voc?? tenha mais agilidade e embasamento na hora de tomar
                    decis??es. Nossas ferramentas permitem a importa????o de dados
                    de outros softwares e, com isso, voc?? centraliza todas as
                    informa????es valiosas em um ??nico lugar.
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
                    empresa atrav??s da limpeza, transforma????o e{' '}
                    <b>modelagem de dados.</b>
                    Criamos ferramentas para melhorar a confiabilidade nas
                    informa????es geradas e tornar a sua{' '}
                    <b>gest??o mais estrat??gica.</b>
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
                    Desenvolvemos sistemas para uma <b>gest??o estrat??gica</b>{' '}
                    com foco em automatizar processos. Criamos solu????es
                    completas de acordo com as opera????es de cada neg??cio, para
                    que os colaboradores n??o precisem mais perder tanto tempo
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
                    personalizadas e integr??veis, e n??s vamos aonde o seu ERP
                    n??o vai. Elimine a necessidade de criar e administrar outras
                    planilhas para controlar todos os{' '}
                    <b>dados da sua empresa.</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="dobra-2__aligncenter">
              <div className="dobra-2__button">
                <Link href="/contato/#PreencherForm">Fale Conosco</Link>
              </div>
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
                <p>Pandas</p>
              </div>

              <div className="tec-page__dobra-3__painel-card">
                <div className="tec-page__dobra-3__painel-logoAzure"></div>
                <p>Azure</p>
              </div>
            </div>
          </div>

          <div className="dobra-2__aligncenter">
            <div className="dobra-2__button">
              <Link href="/tecnologia">Saiba Mais</Link>
            </div>
          </div>
        </div>
        <div className="dobra-4">
          <div className="dobra-4__bg">
            <div className="dobra-4__bg-image"></div>
            <div className="container">
              <h2 className="dobra-4__title">Solu????es</h2>
              <p className="dobra-4__paragraph">
                Desenvolvemos solu????es exclusivas para a necessidade de cada
                empresa nos mais diversos segmentos.{' '}
                <b>Veja algumas solu????es que j?? desenvolvemos:</b>
              </p>
              <div className="dobra-4__center">
                <div
                  className="dobra-4__solucoes"
                  onClick={() => setModalOrcamento(true)}
                >
                  <div className="dobra-4__solucoes-empr"></div>
                  <p className="dobra-4__solucoes-p">Or??amento empresarial</p>
                </div>
                <div
                  className="dobra-4__solucoes mt-5"
                  onClick={() => setModalConstrucao(true)}
                >
                  <div className="dobra-4__solucoes-civil"></div>
                  <p className="dobra-4__solucoes-p">
                    Sistema para Constru????o Civil
                  </p>
                </div>
                <div
                  className="dobra-4__solucoes mt-5"
                  onClick={() => setModalGerencial(true)}
                >
                  <div className="dobra-4__solucoes-gerencial"></div>
                  <p className="dobra-4__solucoes-p">
                    Sistema de Informa????o Gerencial
                  </p>
                </div>

                <div
                  className="dobra-4__solucoes mt-5"
                  onClick={() => setModalAutomatizacao(true)}
                >
                  <div className="dobra-4__solucoes-relatorio"></div>
                  <p className="dobra-4__solucoes-p">
                    Automatiza????o de relat??rios
                  </p>
                </div>

                <div
                  className="dobra-4__solucoes mt-5"
                  onClick={() => setModalGestao(true)}
                >
                  <div className="dobra-4__solucoes-cobranca"></div>
                  <p className="dobra-4__solucoes-p">
                    Gest??o para setor de cobran??a
                  </p>
                </div>

                <div
                  className="dobra-4__solucoes mt-5"
                  onClick={() => setModalConciliacao(true)}
                >
                  <div className="dobra-4__solucoes-conciliacao"></div>
                  <p className="dobra-4__solucoes-p">Concilia????o banc??ria</p>
                </div>
                <div className="dobra-4__button">
                  <Link href="/solucoes">Saiba Mais</Link>
                </div>
              </div>
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

          <div id="Painel-1" className="dobra-5__painel col-6 col-12-m none">
            <div className="dobra-5__painel-bild "></div>
            <div className="dobra-5__painel-cury"></div>
            <div className="dobra-5__painel-eztec"></div>
            <div className="dobra-5__painel-inter-construtora"></div>
            <div className="dobra-5__painel-minasMaquinas"></div>
            <div className="dobra-5__painel-novoLar"></div>
            <div className="dobra-5__painel-souzaRocha"></div>
            <div className="dobra-5__painel-tenco"></div>
            <div className="dobra-5__painel-Tiscoski"></div>
            <div className="dobra-5__painel-viaSul"></div>
            <div className="dobra-5__painel-viewCo"></div>
            <div className="dobra-5__painel-Mrv"></div>
            <div className="dobra-5__painel-Inter"></div>
            <div className="dobra-5__painel-Patrimar"></div>
            <div className="dobra-5__painel-Direional"></div>
            <div className="dobra-5__painel-Precon"></div>
          </div>

          <div
            id="Painel-2"
            className="dobra-5__painel dobra-5__painel-2 col-6 col-12-m"
          >
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
                <b>Queremos te ajudar a encontrar uma solu????o.</b>
              </p>
              <div className="dobra-2__aligncenter">
                <div className="dobra-cta__button">
                  <Link href="/contato">seja nosso pr??ximo case</Link>
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
                    Or??amento empresarial
                  </h2>
                </div>
                <div className="solucoes__modal__mobile">
                  <div className="col-6">
                    <div className="solucoes__modal__orcamentoModal"></div>
                  </div>
                </div>
                <p className="solucoes__modal__cardHeader-paragraph">
                  O nosso sistema de or??amento empresarial automatiza processos
                  para que a sua equipe tenha um ganho operacional
                  significativo. Com o nosso sistema de or??amento empresarial,
                  voc?? consegue envolver todas as ??reas da empresa para saber o
                  quanto pode gastar e ter mais planejado quanto voc?? vai ter de
                  lucro.
                </p>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Lance com facilidade as suas receitas e receba demonstrativos
                  ou relat??rios cont??beis, como:
                </p>

                <ul className="solucoes__modal__ul">
                  <li className="modal-li">
                    DRE Previsto x Realizado Automatizado;
                  </li>
                  <li className="modal-li">
                    Fluxo de Caixa Previsto x Realizado Automatizado;
                  </li>
                  <li className="modal-li">Balan??o;</li>
                  <li className="modal-li">Dentre outros.</li>
                </ul>
              </div>
              <div className="solucoes__modal__desktop col-6">
                <div className="solucoes__modal__orcamentoModal"></div>
              </div>
            </div>
          </div>
          <div
            className="solucoes__modal__closeModal"
            onClick={() => setModalOrcamento(false)}
          ></div>
        </Modal>

        {/* modal automatizacao relat??rios */}
        <Modal
          isOpen={modalAutomatizacao}
          style={customStyles}
          className="modalOrcamento"
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
                    Automatiza????o de relat??rios
                  </h2>
                </div>
                <div className="solucoes__modal__mobile">
                  <div className="col-6">
                    <div className="solucoes__modal__automatizacaoModal"></div>
                  </div>
                </div>

                <p className="solucoes__modal__cardHeader-paragraph">
                  Se na sua empresa ?? preciso despender horas de trabalho dos
                  colaboradores para gerar relat??rios, essa solu????o foi feita
                  para voc??. Com o nosso sistema de Automatiza????o de Relat??rios,
                  voc?? consegue os dados que precisa em poucos minutos.
                </p>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Assim, os seus colaboradores n??o precisam ficar alocados em
                  uma demanda operacional e podem empregar o seu tempo em
                  atividades que trar??o melhores resultados. Facilite a
                  realiza????o de processos burocr??ticos e ganhe agilidade,
                  produtividade e reduza custos.
                </p>
              </div>
              <div className="solucoes__modal__desktop col-6">
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
                    Sistema de Informa????o Gerencial
                  </h2>
                </div>
                <div className="solucoes__modal__mobile">
                  <div className="col-6">
                    <div className="solucoes__modal__gerencialModal"></div>
                  </div>
                </div>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Ferramenta para investir em Business Intelligence e melhorar o
                  controle dos processos da sua empresa. N??s geramos uma s??rie
                  de insumos e informa????es consistentes para apoiar o seu
                  trabalho como gestor.
                </p>
                <p className="solucoes__modal__cardHeader-paragraph">
                  O nosso Sistema de Informa????o Gerencial vai ajudar voc?? a ter
                  uma vis??o sist??mica dos seus processos, para que voc?? consiga
                  identificar ??reas que precisam de melhorias. Trate dados
                  valiosos para os mais diversos processos (Back Office,
                  Produtivo, Comercial e muito mais).Assim, os seus
                  colaboradores n??o precisam ficar alocados em uma demanda
                  operacional e podem empregar o seu tempo em atividades que
                  trar??o melhores resultados. Facilite a realiza????o de processos
                  burocr??ticos e ganhe agilidade, produtividade e reduza custos.
                </p>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Nosso objetivo ?? que voc?? tenha uma leitura facilitada das
                  informa????es gerenciais importantes para tra??ar boas
                  estrat??gias e obter melhores resultados. Fa??a uma abordagem
                  efetiva dos seus dados e torne suas decis??es mais assertivas!
                </p>
              </div>
              <div className="solucoes__modal__desktop col-6">
                <div className="solucoes__modal__gerencialModal"></div>
              </div>
            </div>
          </div>
          <div
            className="solucoes__modal__closeModal"
            onClick={() => setModalGerencial(false)}
          ></div>
        </Modal>

        {/* modal sistema para constru????o civil */}
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
                  Sistema para Constru????o Civil
                </h2>
                <p className="solucoes__modal__cardHeader__construcao-rodape">
                  Sistema para cr??dito imobili??rio/associativo
                </p>
              </div>
            </div>
            <p className="solucoes__modal__cardHeader__construcao-paragraph">
              Este sistema consolida todas as informa????es do cr??dito
              imobili??rio/associativo para facilitar a leitura e o entendimento
              dos arquivos enviados pela CAIXA. Com isso, auxiliamos a sua
              equipe no gerenciamento de dados, a fim de otimizar os processos
              da sua obra.
            </p>
            <p className="solucoes__modal__cardHeader__construcao-paragraph">
              O banco de dados gerado pela VP6 ?? facilmente integr??vel ao ERP da
              sua empresa para que voc?? tenha:
            </p>

            <ul className="solucoes__modal__ul">
              <li className="modal-li">Dashboard de acompanhamento;</li>
              <li className="modal-li">Melhor gest??o da Inadimpl??ncia;</li>
              <li className="modal-li">Baixa Autom??tica de Parcelas;</li>
              <li className="modal-li">DRE com POC;</li>
              <li className="modal-li">
                Fluxo de Caixa com a mem??ria de c??lculo da Caixa Econ??mica;
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
        {/* modal gestor de cobran??a */}
        <Modal
          isOpen={modalGestao}
          style={customStyles}
          className="modalGerencial"
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
                    Gest??o para setor de cobran??a
                  </h2>
                </div>

                <div className="solucoes__modal__mobile">
                  <div className="col-6">
                    <div className="solucoes__modal__cobrancaModal"></div>
                  </div>
                </div>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Essa solu????o ?? perfeita para empresas que possuem um grande
                  volume de clientes. Com o nosso sistema, voc?? consegue ter
                  toda a cobran??a da sua organiza????o sistematizada.
                </p>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Fa??a o controle das contas a receber, gerencie com efetividade
                  as d??vidas dos seus clientes e estruture, a partir disso, a
                  sua r??gua de cobran??as. Configure e-mails, recados
                  personalizados e consiga encaminhar contatos direto para o seu
                  departamento jur??dico.
                </p>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Visualize de maneira simples no nosso sistema as liga????es
                  telef??nicas recebidas e a????es realizadas em cima delas e tenha
                  mais clareza sobre a performance de cada colaborador da sua
                  equipe!
                </p>
              </div>
              <div className="solucoes__modal__desktop col-6">
                <div className="solucoes__modal__cobrancaModal"></div>
              </div>
            </div>
          </div>
          <div
            className="solucoes__modal__closeModal"
            onClick={() => setModalGestao(false)}
          ></div>
        </Modal>

        {/* modal concilia????o bancaria */}
        <Modal
          isOpen={modalConciliacao}
          style={customStyles}
          className="modalGerencial"
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
                    Concilia????o banc??ria
                  </h2>
                </div>
                <div className="solucoes__modal__mobile">
                  <div className="col-6">
                    <div className="solucoes__modal__conciliacaoModal"></div>
                  </div>
                </div>

                <p className="solucoes__modal__cardHeader-paragraph">
                  Solu????o feita para empresas que trabalham com v??rias contas
                  correntes. Importe lan??amentos do seu extrato automaticamente
                  e mantenha seu fluxo de caixa atualizado.
                </p>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Saiba quais clientes pagaram e tenha toda a sua movimenta????o
                  banc??ria refletida no nosso sistema. N??s geramos e
                  interpretamos arquivos banc??rios para que voc?? economize tempo
                  e n??o precise registrar pagamentos e recebimentos manualmente.
                </p>
                <p className="solucoes__modal__cardHeader-paragraph">
                  Automatize os lan??amentos da sua empresa e mantenha os saldos
                  das contas banc??rias em dia!
                </p>
              </div>
              <div className="solucoes__modal__desktop col-6">
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
