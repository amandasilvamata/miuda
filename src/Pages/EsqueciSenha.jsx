import React, { useState } from 'react';
import '../Pages/pagesCSS/login.css';
import Header from '../inc/header/header';
import Footer from '../inc/footer/footer';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const EsqueciSenha = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/miuda/private/check_email.php', { // Alterado
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.exists) {
          navigate('/redefinir-senha'); // Redireciona para redefinição
        } else {
          alert('Email não encontrado.');
        }
      } else {
        alert('Erro ao verificar o email.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao verificar o email.');
    }
  };

  return (
    <>
      <Header />
      <Helmet>
        <title>Esqueci a senha | Livraria Miuda</title>
        <meta name="description" content="Página de recadastro de senha" />
      </Helmet>
      <div className="wrapper">
        <div className="login-container">
          <h2 className="login-title">RECUPERAÇÃO DE SENHA</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">VERIFICAR</button>
            <div className="login-links">
              <a href="/login">Voltar para o Login</a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EsqueciSenha;
