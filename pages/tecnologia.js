import Meta from '../components/meta';
import Link from 'next/link';

const tecnologia = () => {
  return (
    <div>
      <Meta title="Tecnologia" />
      <div className="tec-page">
        <div className="tec-page__bg">
          <div className="container">
            <div className="tec-page__content">
              <h1 className="tec-page__header">
                Tecnologia avançada para sistemas inovadores
              </h1>
            </div>
            <div className="tec-page__content-2">
              <p className="tec-page__paragraph">
                Nossos colaboradores possuem <b>capacitação profissional</b>{' '}
                para atuar com o que há de mais novo e avançado no{' '}
                <b>mercado de TI.</b>
              </p>

              <p className="tec-page__paragraph">
                Entenda mais sobre quais são as tecnologias e{' '}
                <b>linguagens de programação</b> que nós utilizamos no{' '}
                <b>desenvolvimento de projetos</b> da VP6.
              </p>
              <div className="dobra-2__aligncenter">
                <div className="tec-page__button">
                  <a href="/solucoes" href="#vertecnologias">
                    ver tecnologias
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tec-page__dobra-3">
          <div className="container">
            <h2 className="tec-page__dobra-3__title" id="vertecnologias">
              Tecnologias Utilizadas
            </h2>
            <div className="dobra-2__aligncenter">
              <p className="tec-page__dobra-3__paragraph">
                Trabalhamos com <b>metodologias ágeis</b> adaptáveis para criar
                os nossos
                <b> sistemas empresariais.</b> Veja abaixo quais são as
                principais tecnologias e <b>linguagens de programação</b> que
                utilizamos em nosso trabalho:
              </p>
            </div>
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
                <div className="tec-page__dobra-3__painel-logoPanda"></div>
                <p>Panda</p>
              </div>

              <div className="tec-page__dobra-3__painel-card">
                <div className="tec-page__dobra-3__painel-logoReact"></div>
                <p>React</p>
              </div>

              <div className="tec-page__dobra-3__painel-card">
                <div className="tec-page__dobra-3__painel-logoReact"></div>
                <p>React Native</p>
              </div>

              <div className="tec-page__dobra-3__painel-card">
                <div className="tec-page__dobra-3__painel-logoAngular"></div>
                <p>Angular</p>
              </div>

              <div className="tec-page__dobra-3__painel-card">
                <div className="tec-page__dobra-3__painel-logoSql"></div>
                <p>SQL</p>
              </div>

              <div className="tec-page__dobra-3__painel-card">
                <div className="tec-page__dobra-3__painel-logoMysql"></div>
                <p>MySQL</p>
              </div>
              <div className="tec-page__dobra-3__painel-card">
                <div className="tec-page__dobra-3__painel-logoPostgres"></div>
                <p>PostgreSQL</p>
              </div>

              <div className="tec-page__dobra-3__painel-card">
                <div className="tec-page__dobra-3__painel-logoAws"></div>
                <p>AWS</p>
              </div>

              <div className="tec-page__dobra-3__painel-card">
                <div className="tec-page__dobra-3__painel-logoAzure"></div>
                <p>Azure</p>
              </div>

              <div className="tec-page__dobra-3__painel-card">
                <div className="tec-page__dobra-3__painel-logoDigitalOCean"></div>
                <p>Digital Ocean</p>
              </div>
            </div>
          </div>
        </div>

        <div className="dobra-cta">
          <div className="dobra-cta__bg">
            <div className="tec-page__content-cta">
              <p className="dobra-cta__title">
                Queremos desenvolver a solução que vai melhorar os processos da
                sua empresa.
              </p>
              <div className="dobra-2__aligncenter">
                <div className="dobra-cta__button">
                  <Link href="/contato">seja nosso próximo case</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tecnologia;
