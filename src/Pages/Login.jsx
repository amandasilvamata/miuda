import React, { useState } from 'react';
import Header from '../inc/header/header';
import Footer from '../inc/footer/footer';
import '../Pages/pagesCSS/login.css';
import Oculto from '../assets/icons/oculto.svg';
import Visivel from '../assets/icons/naoOculto.svg';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost/miuda/private/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        // Redireciona para a página home se o login for bem-sucedido
        navigate(result.redirect);
      } else {
        // Define a mensagem de erro com base na resposta do servidor
        setError(result.message);
      }
    } catch (error) {
      setError('Erro ao conectar ao servidor. Tente novamente.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Livraria Miuda</title>
        <meta name="description" content="Pagina de login" />
      </Helmet>
      <Header/>
      <div className="wrapper">
        <div className="login-container">
          <h2 className="login-title">LOGIN</h2>
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
            <div className="form-group">
              <label>Senha</label>
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="toggle-password" onClick={togglePasswordVisibility}>
                  {showPassword ? <img src={Visivel} alt="Ocultar senha" /> : <img src={Oculto} alt="Mostrar senha" />}
                </span>
              </div>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button className='btn_padrao' type="submit">ENTRAR</button>
            <div className="login-links">
              <a href="/esqueci-senha">Esqueci a senha</a>
              <a href="/cadastro">Criar conta</a>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
