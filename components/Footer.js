import React, { Component, Fragment } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="line-header-footer"></div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="footer__col-1 col-4">
                <div className="footer__col-1__logo"></div>
                <div className="footer__col-1__box mt-4">
                  <div className="footer__col-1__box__map"></div>
                  <div className="footer__col-1__box__text">Av. Raja Gabaglia 3117/Sala 113 São Bento | Belo Horizonte/MG</div>
                </div>

                <div className="footer__col-1__box">
                  <div className="footer__col-1__box__phone"></div>
                  <div className="footer__col-1__box__text">(31) 3347-0368</div>
                </div>

                <div className="footer__col-1__box">
                  <div className="footer__col-1__box__mail"></div>
                  <div className="footer__col-1__box__text">contato@vp6.com.br</div>
                </div>

              </div>
              <div className="footer__col-2 col-5">
                <ul className="footer__col-2__menu">
                  <li><a href="/">Home</a></li>
                  <li><a href="/sobre">Sobre</a></li>
                  <li><a href="/tecnologia">Tecnologia</a></li>
                  <li><a href="/solucoes">Soluções</a></li>

                  <li><a href="/contato">Contato</a></li>
                </ul>
                <div className="footer__col-2__box">
                <p>Cadastre-se e receba atualizações em seu e-mail</p>
                <div className="footer__col-2__input-group">
                  <input type="text" className="footer__col-2__form-control" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
                  <div className="input-group-append">
                    <button className="footer__col-2__button" type="button">Enviar</button>
                  </div>
                </div>
                </div>
              </div>
              <div className="footer__col-3 col-3">
                <p>Acompanhe a VP6 pela web e fique por dentro das nossas notícias:</p>
                <div className="footer__col-3__box">
                  <a className="footer__col-3__box-Rede2" href="https://www.linkedin.com/company/vp6/mycompany/?viewAsMember=true" target="_blank"></a>
                  <a className="footer__col-3__box-Rede3" href="https://www.instagram.com/vp6_consultoria_ti/" target="_blank"></a>

                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;