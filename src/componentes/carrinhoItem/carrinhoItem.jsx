import React from 'react';
import '../carrinhoItem/carinhoItem.css';

const CarrinhoItem = ({ livro, onExcluir, aumentarQuantidade, diminuirQuantidade }) => {
  const calcularSubtotal = () => (livro.quantidade * livro.preco).toFixed(2);

  return (
    <div className="carrinho-item">
      <img src={livro.capa} alt={livro.nome} className="livro-capa" />
      <div className="livro-info">
        <h4>{livro.nome}</h4>
        <p>{livro.estoque ? 'Em estoque' : 'Fora de estoque'}</p>
      </div>
      <div className="quantidade-controle">
        <button onClick={diminuirQuantidade}>-</button>
        <span>{livro.quantidade}</span>
        <button onClick={aumentarQuantidade}>+</button>
      </div>
      <p className="preco">R$ {livro.preco.toFixed(2)}</p>
      <p className="subtotal">Subtotal: R$ {calcularSubtotal()}</p>
      <button className="excluir-btn" onClick={onExcluir}>Excluir</button>
    </div>
  );
};

export default CarrinhoItem;
