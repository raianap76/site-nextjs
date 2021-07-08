import Meta from '../components/meta';
import React, { useState } from 'react';
import Link from 'next/link';

const about = () => {
  const [content, setContent] = useState(
    'Nosso time é diverso, respeitamos e aceitamos as diferenças de cada um. Temos profissionais com formações distintas e habilidades distintas e acreditamos que é essa característica que nos fará chegar mais longe.'
  );
  const [actived1, setActived1] = useState(
    'about-page__dobra-1__col-2-buttons-active'
  );
  const [actived2, setActived2] = useState('');
  const [actived3, setActived3] = useState('');

  const handleSubmit = (e) => {
    if (e.target.id === 'button-1') {
      setActived1('about-page__dobra-1__col-2-buttons-active');
      setContent(
        'Nosso time é diverso, respeitamos e aceitamos as diferenças de cada um. Temos profissionais com formações distintas e habilidades distintas e acreditamos que é essa característica que nos fará chegar mais longe.'
      );
    } else {
      setActived1('');
    }
    if (e.target.id === 'button-2') {
      setActived2('about-page__dobra-1__col-2-buttons-active');
      setContent(
        'Nossos colaboradores possuem capacitação profissional para atuar com o que há de mais novo e avançado no mercado de TI.'
      );
    } else {
      setActived2('');
    }
    if (e.target.id === 'button-3') {
      setActived3('about-page__dobra-1__col-2-buttons-active');
      setContent(
        'Somos um time criativo, usando as melhorias tecnologias do mercado, prpopando as melhores soluções, com qualidade e otimização.'
      );
    } else {
      setActived3('');
    }
    e.preventDefault();
  };
  return (
    <div>
      <Meta title="Sobre" />
      <div className="about-page">
        <div className="about-page__bg">
          <div className="container">
            <div className="about-page__content">
              <h1 className="about-page__header">
                Nosso foco é solucionar problemas
              </h1>
              <p className="about-page__paragraph">
                A VP6 é uma <b>software house</b>, que foi criada em 2017,
                focada na
                <b> solução de problemas</b> processuais. Nós aumentamos o
                potencial de
                <b> competitividade empresarial</b> de nossos clientes a um
                <b> baixo custo</b> e com rapidez de implantação.
              </p>
              <div className="dobra-2__aligncenter">
                <div className="about-page__button">
                  <Link href="/solucoes">Saiba Mais</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-page__dobra-1">
          <div className="container">
            <div className="row">
              <div className="about-page__dobra-1__col-1 col-6 col-12-m">
                <h2>Pilares</h2>
                <p>
                  Estamos focados em soluções de gerenciamento de indicadores e
                  criamos as nossas ferramentas unindo tecnologia à
                  <b> análise de processos.</b>
                </p>
                <p>
                  Nosso atendimento e serviços são personalizados e geramos
                  melhorias significativas para os nossos clientes.
                </p>
              </div>
              <div className="about-page__dobra-1__col-2 col-6 col-12-m">
                <div className="about-page__dobra-1__col-2-buttons">
                  <button
                    className={actived1}
                    id="button-1"
                    onClick={handleSubmit}
                  >
                    Diversidade
                  </button>
                  <button
                    className={actived2}
                    id="button-2"
                    onClick={handleSubmit}
                  >
                    Conhecimento
                  </button>
                  <button
                    className={actived3}
                    id="button-3"
                    onClick={handleSubmit}
                  >
                    Criatividade
                  </button>
                </div>
                <div className="about-page__dobra-1__col-2">
                  <p className="about-page__dobra-1__col-2-paragraph">
                    {content}
                  </p>
                </div>
              </div>
              {/* mobile */}
              <div className="about-page__dobra-1__col-2-m">
                <div className="col-6 col-12-m">
                  <div className="about-page__dobra-1__col-2-m-cards">
                    <div className="about-page__dobra-1__col-2-m-card">
                      <h2 className="about-page__dobra-1__col-2-m-header">
                        Diversidade
                      </h2>
                      <div className="about-page__dobra-1__col-2-m">
                        <p className="about-page__dobra-1__col-2-m-paragraph">
                          Nosso time é diverso, respeitamos e aceitamos as
                          diferenças de cada um. Temos profissionais com
                          formações distintas e habilidades distintas e
                          acreditamos que é essa característica que nos fará
                          chegar mais longe.
                        </p>
                      </div>
                    </div>
                    <div className="about-page__dobra-1__col-2-m-card">
                      <h2 className="about-page__dobra-1__col-2-m-header">
                        Conhecimento
                      </h2>
                      <div className="about-page__dobra-1__col-2-m">
                        <p className="about-page__dobra-1__col-2-m-paragraph">
                          Nossos colaboradores possuem capacitação profissional
                          para atuar com o que há de mais novo e avançado no
                          mercado de TI.
                        </p>
                      </div>
                    </div>
                    <div className="about-page__dobra-1__col-2-m-card">
                      <h2 className="about-page__dobra-1__col-2-m-header">
                        Criatividade
                      </h2>
                      <div className="about-page__dobra-1__col-2-m">
                        <p className="about-page__dobra-1__col-2-m-paragraph">
                          Somos um time criativo, usando as melhorias
                          tecnologias do mercado, prpopando as melhores
                          soluções, com qualidade e otimização.
                        </p>
                      </div>
                    </div>
                  </div>
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

        <div className="dobra-trabalhe">
          <div className="dobra-trabalhe__bg">
            <div className="dobra-trabalhe__content">
              <p className="dobra-trabalhe__title">Trabalhe com a gente</p>
              <p className="dobra-trabalhe__paragraph">
                Estamos à procura de profissionais talentosos e dedicados para
                inovar junto com a gente! <b>Quer fazer parte do nosso time?</b>
              </p>
              <div className="dobra-2__aligncenter">
                {/* <button className="dobra-trabalhe__button">
                  mande seu currículo
                </button> */}
                <div className="dobra-trabalhe__button">
                  <Link href="/contato/#PreencherForm">
                    mande seu currículo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
