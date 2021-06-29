import Meta from '../components/meta';

const contato = () => {
  return (
    <div>
      <Meta title="Contato" />
      <div className="contato-page">
        <div className="contato-page__mascara"></div>
        <div className="contato-page__bg">
          <div className="container">
            <h2 className="contato-page__header">Seja o nosso próximo case</h2>
            <p className="contato-page__paragraph">
              Quer melhorar os processos da sua empresa? Queremos te ajudar a
              encontrar a solução perfeita para a sua necessidade.
            </p>

            <h3 className="contato-page__header-2">Entenda o nosso processo</h3>
            <div className="contato-page__etapas">
              <div className="contato-page__etapas-image"></div>
              <div className="contato-page__etapas-row">
                <p className="contato-page__etapas-paragraph">
                  Assim que você preencher e nos enviar o formulário, ele será
                  encaminhado para a nossa equipe comercial.
                </p>
                <p className="contato-page__etapas-paragraph-2">
                  A nossa equipe comercial entrará em contato com você em até 48
                  horas após o envio do formulário.
                </p>

                <p className="contato-page__etapas-paragraph-2">
                  Vamos agendar uma apresentação para a sua empresa, para que
                  você entenda mais sobre os nossos produtos e os nossos
                  processos.
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="contato-page__form">
          <div className="container">
            <h2 className="contato-page__form-header" id="PreencherForm">Vamos lá?</h2>
            <p className="contato-page__form-paragraph">
              Preencha o formulário abaixo ou entre em contato via
              e-mail/telefone:
            </p>
            <div className="contato-page__form-contatos">
              <div className="contato-page__form-geral">
                <div className="contato-page__form-geral-image"></div>
                <div className="contato-page__form-geral-text">
                  contato@vp6.com.br
                </div>
              </div>

              <div className="contato-page__form-geral">
                <div className="contato-page__form-geral__phone"></div>
                <div className="contato-page__form-geral-text">
                  (31) 3347-0368
                </div>
              </div>
            </div>
            <form action="" method="post" id="formset">
              <fieldset>
                <label className="nome">Nome: <em>&#42;</em>
                  <input name="nome" type="text" id="nome" />
                </label>
                <label className="email">Email: <em>&#42;</em>
                  <input name="email" type="email" id="email" />
                </label>

                <label className="telefone">Telefone: <em>&#42;</em>
                  <input name="telefone" type="phone" id="telefone" />
                </label>
                <label className="empresa">Empresa: <em>&#42;</em>
                  <input name="empresa" type="text" id="empresa" />
                </label>
                <label className="setor">Setor: <em>&#42;</em>
                  <input name="setor" type="text" id="setor" />
                </label>

                <label className="textArea">Fale um pouco sobre o que a sua empresa precisa:<br />
                <textarea name="describe" cols="35" rows="5"></textarea>
                </label>
                <input className="button-submit" type="submit" value="Enviar" />
              </fieldset>




            </form>



          </div>
        </div>
      </div>
    </div>
  );
};

export default contato;
