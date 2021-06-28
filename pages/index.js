import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
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
              <div className="dobra-4__solucoes">
                <div className="dobra-4__solucoes-empr"></div>
                <p className="dobra-4__solucoes-p">Orçamento empresarial</p>
              </div>
              <div className="dobra-4__solucoes mt-5">
                <div className="dobra-4__solucoes-civil"></div>
                <p className="dobra-4__solucoes-p">
                  Sistema para Construção Civil
                </p>
              </div>
              <div className="dobra-4__solucoes mt-5">
                <div className="dobra-4__solucoes-gerencial"></div>
                <p className="dobra-4__solucoes-p">
                  Sistema de Informação Gerencial
                </p>
              </div>

              <div className="dobra-4__solucoes mt-5">
                <div className="dobra-4__solucoes-relatorio"></div>
                <p className="dobra-4__solucoes-p">
                  Automatização de relatórios
                </p>
              </div>

              <div className="dobra-4__solucoes mt-5">
                <div className="dobra-4__solucoes-cobranca"></div>
                <p className="dobra-4__solucoes-p">
                  Gestão para setor de cobrança
                </p>
              </div>

              <div className="dobra-4__solucoes mt-5">
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
      </div>
    </>
  );
}
