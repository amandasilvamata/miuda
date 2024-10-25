import React from 'react';
import Header from '../inc/header/header';
import Footer from '../inc/footer/footer';
import LivroModelo from '../componentes/livroModelo/livromodelo';
import '../Pages/pagesCSS/informacoesLivro.css';
import LivroModeloCompra from '../componentes/livroModeloCompra/livroModeloCompra';
import BarraCategoria from '../componentes/barraCategorias/categorias'
import { Helmet } from 'react-helmet';
const InformacoesLivro = () => {
  return (
    <>
    <Helmet>
                <title>Informações sobre o livro| Livraria Miuda</title>
                <meta name="description" content="Pagina de informacoes sobre o livro" />
            </Helmet>
      <Header />
      <BarraCategoria/>
      <main className="livro-info-container">

        {/*  Informações do Livro */}
        <section className="livro-information">
          <div className="livro-imagem">
            <LivroModelo corLivro='green' caminhoImagem='assets/images/pequenopricipe.jpg'/>
          </div>
          <div className="livro-detalhes">
            <h1 className="livro-titulo">O Pequeno Príncipe</h1>
            <p className="livro-preco">R$ 34,90</p>

            {/*  Compra */}
            <div className="livro-compra">
              <input type="number" min="1" defaultValue="1" className="input-quantidade" />
              <a className='comprar' href="/carrinho"><button className="btn-comprar">Comprar</button></a>
              <span className="icon-carrinho material-icons-outlined">add_shopping_cart</span>
            </div>

            {/* Cálculo de Frete */}
            <div className="livro-frete">
              <input type="text" placeholder="Calcule o frete" className="input-frete" />
              <button className="btn-frete">OK</button>
            </div>
          </div>
        </section>

        {/*  Sinopse e Ficha Técnica */}
        <section className="livro-info-extra">
          <div className="livro-sinopse">
            <h2 className="secao-titulo">Sinopse</h2>
            <p>
              O Pequeno Príncipe é uma obra clássica da literatura mundial que narra a história de um jovem príncipe que viaja de planeta em planeta, encontrando pessoas e vivendo aventuras que ilustram os valores da amizade, amor e perda. Escrito por Antoine de Saint-Exupéry, o livro é uma profunda reflexão sobre a vida, contada de forma simples e envolvente.
            </p>
          </div>

          <div className="livro-ficha-tecnica">
            <h2 className="secao-titulo">Ficha Técnica</h2>
            <ul>
              <li><strong>Autor:</strong> Antoine de Saint-Exupéry</li>
              <li><strong>Ano de Edição:</strong> 1943</li>
              <li><strong>Origem:</strong> França</li>
              <li><strong>Idioma:</strong> Português</li>
              <li><strong>Quantidade de Páginas:</strong> 96</li>
            </ul>
          </div>
        </section>

        {/*Recomendações */}
        <section className="livro-recomendacoes">
        
          <div className="livro-recomendacoes-linha">
            <LivroModeloCompra caminhoImagem= 'assets/images/omeninoquenaosabialer.jpg' titulo= 'O Menino que Não...' preco= 'R$ 29,90'/>
            <LivroModeloCompra caminhoImagem= 'assets/images/ohobbit.jpg' titulo= 'O Hobbit' preco= 'R$ 49,90'/>
            <LivroModeloCompra caminhoImagem= 'assets/images/diariodeumabananavermelho.jpg' titulo= 'Diário de um Banana' preco= 'R$ 35,00'/>
            <LivroModeloCompra caminhoImagem= 'assets/images/omeninodalua.jpg' titulo= 'O Menino da Lua' preco= 'R$ 45,50'/>
            <LivroModeloCompra />
          
          </div>
          <div className="livro-recomendacoes-linha">
            <LivroModeloCompra caminhoImagem= 'assets/images/diariodeumbananaamarelo.jpg' titulo= 'Diário de um Banana' preco= 'R$ 32,00'/>
            <LivroModeloCompra caminhoImagem= 'assets/images/istonaoeumacenoura.jpg' titulo= 'Isto Não é Uma Cenoura' preco= 'R$ 19,99'/>
            <LivroModeloCompra  caminhoImagem= 'assets/images/oprincipepreto.png' titulo= 'O Pequeno Prícipe Preto' preco= 'R$ 28,99'/>
            <LivroModeloCompra caminhoImagem= 'assets/images/omeninomaluquinho.jpg' titulo= 'O Menino Maluquinho' preco= 'R$ 30,00'/>
            <LivroModeloCompra caminhoImagem= 'assets/images/adivinhaquantoeuteamo.jpg' titulo= 'Adivinha Quanto Eu...' preco= 'R$ 36,50'/>
         
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InformacoesLivro;
