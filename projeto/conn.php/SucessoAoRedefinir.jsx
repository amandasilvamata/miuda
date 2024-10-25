import React from 'react';
import '../Pages/pagesCSS/login.css';
import { Helmet } from 'react-helmet';
const SenhaRedefinidaSucesso = () => {
  return (
    <>
    <Helmet>
                <title>Sucesso | Livraria Miuda</title>
                
            </Helmet>
      <div className="wrapper">
        <div className="login-container">
          <h2 className="login-title">Senha Redefinida com Sucesso!</h2>
          <div className="login-links">
            <a href="/login">Voltar para o Login</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SenhaRedefinidaSucesso;
