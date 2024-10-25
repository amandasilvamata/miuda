import React, { useState } from 'react';
import '../Pages/pagesCSS/login.css';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const RedefinirSenha = () => {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [email, setEmail] = useState(''); // Estado para o e-mail
  const navigate = useNavigate(); // Usando useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (senha === confirmarSenha) {
      try {
        // Primeiro, verifica se o e-mail existe e obtém o idDadosAcesso
        const emailResponse = await fetch('http://localhost/miuda/private/check_email.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }), // Enviando o e-mail
        });

        const emailData = await emailResponse.json();

        if (emailData.exists) {
          const userId = emailData.idDadosAcesso; // Recupera o ID do usuário
          alert (userId);

          // Agora, redefine a senha
          const response = await fetch('http://localhost/miuda/private/reset_password.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId, password: senha }), // Enviando a nova senha
          });

          if (response.ok) {
            alert('Senha redefinida com sucesso!');
            navigate('/sucesso-redefinir'); // Redireciona após sucesso
          } else {
            alert('Erro ao redefinir a senha.');
          }
        } else {
          alert('E-mail não encontrado.');
        }
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao redefinir a senha.');
      }
    } else {
      alert('As senhas não coincidem. Tente novamente.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Redefinir Senha | Livraria Miuda</title>
      </Helmet>
      <div className="wrapper">
        <div className="login-container">
          <h2 className="login-title">RECUPERAÇÃO DE SENHA</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Nova Senha</label>
              <input
                type="password"
                placeholder="Digite sua nova senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Confirmar Senha</label>
              <input
                type="password"
                placeholder="Confirme sua nova senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                required
              />
            </div>
            <button className='btn_padrao' type="submit">REDEFINIR SENHA</button>
            <div className="login-links">
              <a href="/login">Voltar para o Login</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RedefinirSenha;
