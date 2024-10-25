import React from 'react';
import '../Pages/pagesCSS/login.css';
import Header from '../inc/header/header';
import Footer from '../inc/footer/footer';
import { Helmet } from 'react-helmet';
const RecuperacaoSenha = () => {
  return (
    <>
    <Header/>
    <Helmet>
                <title>Esqueci a senha | Livraria Miuda</title>
                <meta name="description" content="Pagina de recadastro de senha" />
            </Helmet>
      <div className="wrapper">
        <div className="login-container">
          <h2 className="login-title">RECUPERAÇÃO DE SENHA</h2>
          <form className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                required
              />
            </div>
            <button type="submit">ENVIAR</button>
            <div className="login-links">
              <a href="/login">Voltar para o Login</a>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default RecuperacaoSenha;
