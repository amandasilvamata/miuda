import React from 'react';
import Footer from '../inc/footer/footer';
import Header from '../inc/header/header';
import '../Pages/pagesCSS/meusdados.css'

const MeusDados = () => {
    return (
     <>
     <Header/>
      <main>
        <div className="meusdadosdados">MEUS DADOS</div>
  
        <div className="actt acesso">
          <h2>DADOS DE ACESSO</h2>
          <div className="form-group-dados">
            <div className="input-group">
              <label htmlFor="email">EMAIL</label>
              <input type="email-dados" id="email-dados" placeholder="senactito@gmail.com" disabled />
            </div>
            <div className="input-group">
              <label htmlFor="cpf">CPF/CNPJ</label>
              <input type="text" id="cpf" placeholder="03.709.814/0002-79" disabled />
            </div>
          </div>
          <button className='dadosb'>ALTERAR SENHA</button>
        </div>
  
        <div className="actt cadastrais">
          <h2>DADOS CADASTRAIS</h2>
          <div className="form-group-dados">
            <div className="input-group">
              <label htmlFor="nome">NOME</label>
              <input type="text" id="nome" placeholder="Senac Tito" disabled />
            </div>
            <div className="input-group">
              <label htmlFor="celular">CELULAR/TELEFONE</label>
              <input type="text" id="celular" placeholder="(11) 2888-5500" disabled/>
            </div>
          </div>
          <button className='dadosb'>EDITAR</button>
        </div>
  
        <div className="actt enderecodados">
          <h2>ENDEREÇO</h2>
          <div className="form-group-dados">
            <div className="input-group">
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" placeholder="05051-000" disabled />
            </div>
            <div className="input-group">
              <label htmlFor="numero">NUMERO</label>
              <input type="text" id="numero" placeholder="54" disabled />
            </div>
            <div className="input-group">
              <label htmlFor="rua">RUA</label>
              <input type="text" id="rua" placeholder="Tito" disabled />
            </div>
            <div className="input-group">
              <label htmlFor="bairro">BAIRRO</label>
              <input type="text" id="bairro" placeholder="Vila Romana" disabled />
            </div>
            <div className="input-group">
              <label htmlFor="cidade">CIDADE</label>
              <input type="text" id="cidade" placeholder="São Paulo" />
            </div>
            <div className="input-group">
              <label htmlFor="complemento">COMPLEMENTO</label>
              <input type="text" id="complemento" placeholder=" " />
            </div>
            <div className="input-group">
              <label htmlFor="estado">ESTADO</label>
              <input type="text" id="estado" placeholder="São Paulo" />
            </div>
            <div className="input-group">
              <label htmlFor="referencia">PONTO DE REFERÊNCIA</label>
              <input type="text" id="referencia" placeholder=" " />
            </div>
          </div>
          <button className='dadosb'>EDITAR</button>
        </div>
      </main>
      <Footer/>
      </>
    );
  };
  
  export default MeusDados;