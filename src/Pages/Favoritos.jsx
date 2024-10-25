import React from 'react';
import Footer from '../inc/footer/footer';
import Header from '../inc/header/header';
import LivroModelo from '../componentes/livroModelo/livromodelo';
import LivroModeloCompra from '../componentes/livroModeloCompra/livroModeloCompra';
import '../Pages/pagesCSS/favoritos.css';

const livros1 = [
    {
        id: 1,
        imagem: 'assets/images/omeninoquenaosabialer.jpg',
        titulo: 'O Menino que Não...',
        preco: 'R$ 29,90'
    },
    {
        id: 2,
        imagem: 'assets/images/ohobbit.jpg',
        titulo: 'O Hobbit',
        preco: 'R$ 49,90'
    },
    {
        id: 3,
        imagem: 'assets/images/diariodeumabananavermelho.jpg',
        titulo: 'Diário de um Banana',
        preco: 'R$ 35,00'
    },
    {
        id: 4,
        imagem: 'assets/images/omeninodalua.jpg',
        titulo: 'O Menino da Lua',
        preco: 'R$ 45,50'
    },
    {
        id: 5,
        imagem: 'assets/images/marcelomarmelomartelo.jpg',
        titulo: 'Marcelo, Marmelo...',
        preco: 'R$ 39,99'
    }
];

const livros2 = [
    {
        id: 6,
        imagem: 'assets/images/diariodeumbananaamarelo.jpg',
        titulo: 'Diário de um Banana',
        preco: 'R$ 32,00'
    },
    {
        id: 7,
        imagem: 'assets/images/istonaoeumacenoura.jpg',
        titulo: 'Isto Não é Uma Cenoura',
        preco: 'R$ 19,99'
    },
    {
        id: 8,
        imagem: 'assets/images/pequenopricipe.jpg',
        titulo: 'O Pequeno Prícipe',
        preco: 'R$ 34,90'
    },
    {
        id: 9,
        imagem: 'assets/images/omeninomaluquinho.jpg',
        titulo: 'O Menino Maluquinho',
        preco: 'R$ 30,00'
    },
    {
        id: 10,
        imagem: 'assets/images/adivinhaquantoeuteamo.jpg',
        titulo: 'Adivinha Quanto Eu...',
        preco: 'R$ 36,50'
    }
];

const Favoritos = () => {
    return (
        <>
        <Header />
        <main>
            <div className="populares">Favoritos</div>

            {/* Primeira lista de livros */}
            <div id="livro">
                {livros1.map((livro) => (
                    <LivroModeloCompra
                        key={livro.id}
                        caminhoImagem={livro.imagem}
                        titulo={livro.titulo}
                        preco={livro.preco}
                        cores={['#2C4A9C', '#F65E86', '#FA8B71', '#FACD5B']} // Exemplo de cores para variar
                    />
                ))}
            </div>

            {/* Segunda lista de livros */}
            <div id="livro">
                {livros2.map((livro) => (
                    <LivroModeloCompra
                        key={livro.id}
                        caminhoImagem={livro.imagem}
                        titulo={livro.titulo}
                        preco={livro.preco}
                        cores={['#FA8B71', '#FACD5B', '#2C4A9C']} // Exemplo de cores para variar
                    />
                ))}
            </div>
        </main>
        <Footer />
        </>
    );
};

export default Favoritos;
