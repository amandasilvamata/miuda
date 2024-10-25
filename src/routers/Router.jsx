// routers/Router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cadastro from '../Pages/Cadastro';
import Login from '../Pages/Login';
import EsqueciSenha from '../Pages/EsqueciSenha';
import RedefinirSenha from '../Pages/RedefinirSenha'
import SucessoAoRedefinir from '../Pages/SucessoAoRedefinir'
import Home from '../Pages/Home'
import Cardapio from '../Pages/Cardapio';
import Carrinho from '../Pages/Carrinho';
import InformacoesLivro from '../Pages/InformacoesLivro';
import Favoritos from '../Pages/Favoritos';
import Pagamento from '../Pages/Pagamento';
import Pedido from '../Pages/Pedido';
import Realizado from '../Pages/Realizado';
import MeusPedidos from '../Pages/MeusPedidos';
import MinhaConta from '../Pages/Minhaconta';
import MeusDados from '../Pages/Meusdados';




const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} exact />
      
      <Route path="/informacoeslivro" element={<InformacoesLivro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/carrinho" element={<Carrinho/>} />
      <Route path="/cardapio" element={<Cardapio />} />
      <Route path="/esqueci-senha" element={<EsqueciSenha />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/redefinir-senha" element={<RedefinirSenha />} />
      <Route path="/sucesso-redefinir" element={<SucessoAoRedefinir />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/pagamento" element={<Pagamento />} />
      <Route path="/pedido" element={<Pedido />} />
      <Route path="/realizado" element={<Realizado />} />
      <Route path="/meus-pedidos" element={<MeusPedidos />} />
      <Route path="/minha-conta" element={<MinhaConta />} />
      <Route path="/meus-dados" element={<MeusDados />} />
     
    </Routes>
  );
};

export default Router;
