
import React, { useState } from 'react';
import axios from 'axios'; // Importa o axios
import '../Pages/pagesCSS/login.css';
import Oculto from '../assets/icons/oculto.svg';
import Visivel from '../assets/icons/naoOculto.svg';
import Header from '../inc/header/header';
import Footer from '../inc/footer/footer';
import { Helmet } from 'react-helmet';

const Cadastro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(''); // Para exibir mensagens de sucesso ou erro

  // Alterna a visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  // Alterna a visibilidade da confirmação da senha
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prev => !prev);
  };

  // Função chamada ao enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Verifica se as senhas correspondem antes de enviar para o backend
    if (password !== confirmPassword) {
      setMessage("As senhas não correspondem.");
      return;
    }

    try {
      // Envia os dados para o backend usando POST
      const response = await axios.post('http://localhost/miuda/private/register.php', {
        email,
        password,
        confirmPassword,
      });

      // Verifica a resposta do backend
      setMessage(response.data);
    } catch (error) {
      setMessage("Erro ao cadastrar. Tente novamente mais tarde.");
      console.error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Cadastro | Livraria Miuda</title>
        <meta name="description" content="Pagina de cadastro" />
      </Helmet>
      <Header />
      <div className="wrapper">
        <div className="login-container">
          <h2 className="login-title">CADASTRO</h2>
          {message && <p className="message">{message}</p>} {/* Exibe a mensagem de sucesso ou erro */}
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
                  <img src={showPassword ? Visivel : Oculto} alt={showPassword ? "Ocultar senha" : "Mostrar senha"} />
                </span>
              </div>
            </div>
            <div className="form-group">
              <label>Confirmar Senha</label>
              <div className="password-container">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span className="toggle-password" onClick={toggleConfirmPasswordVisibility}>
                  <img src={showConfirmPassword ? Visivel : Oculto} alt={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"} />
                </span>
              </div>
            </div>
            <button className='btn_padrao' type="submit">CADASTRAR</button>
            <div className="login-links">
              <a href="/login">LOGIN</a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cadastro;
