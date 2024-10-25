import React, { useState } from 'react';
import '../Pages/pagesCSS/login.css';
import { Helmet } from 'react-helmet';
const RecuperacaoSenha = () => {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para redefinir a senha,
    if (senha === confirmarSenha) {
      // Lógica para redefinir a senha
      alert('Senha redefinida com sucesso!');
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
            <button className='btn_padrao' type="submit">REDIFINIR SENHA</button>
            <div className="login-links">
              <a href="/login">Voltar para o Login</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecuperacaoSenha;
