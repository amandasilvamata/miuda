import React, { useState } from 'react';
import Header from '../inc/header/header';
import Footer from '../inc/footer/footer';

import BarraCategoria from '../componentes/barraCategorias/categorias'

import '../Pages/pagesCSS/cardapio.css'
import { Helmet } from 'react-helmet';
const Cardapio = () => {


    return (
        <>
         <Helmet>
                <title>Cardapio | Livraria Miuda</title>
                <meta name="description" content="Pagina de cardapio" />
            </Helmet>
            <Header />
            <BarraCategoria />
            <div className='containerTitlePrincipal'>
                <h1>Cardápio</h1>
            </div>
            <section className='cardapio'>
                <div className='container_title'>
                    <h1>BEBIDAS</h1>
                </div>
                <div className='produtosCardapio'>
                    <div className='produtoIndividual'>
                        <div className='container_icon'>
                            <span class="material-icons-outlined">
                                emoji_food_beverage
                            </span>
                        </div>
                        <h1>
                        MOCHA COM CHOCOLATE AMARGO</h1>
                        <p>Uma deliciosa combinação de café espresso com leite vaporizado e um toque de chocolate amargo de alta qualidade. Perfeito para quem aprecia o sabor intenso do café com a suavidade e o requinte do chocolate. Ideal para acompanhar uma boa leitura.</p>
                    </div>

                    <div className='produtoIndividual'>
                        <div className='container_icon'>
                            <span class="material-icons-outlined">
                                emoji_food_beverage
                            </span>
                        </div>
                        <h1>LIMONADA DE MORANGO COM HORTELÃ</h1>
                        <p>Uma refrescante mistura de limão fresco com morangos suculentos e folhas de hortelã. Esta bebida equilibra a acidez cítrica com a doçura natural dos morangos, finalizada com o frescor revigorante da hortelã. A escolha perfeita para momentos leves e descontraídos.</p>
                    </div>
                    <div className='produtoIndividual'>
                        <div className='container_icon'>
                            <span class="material-icons-outlined">
                                emoji_food_beverage
                            </span>
                        </div>
                        <h1>CHÁ GELADO DE HIBISCO COM LIMÃO</h1>
                        <p>Uma bebida leve e refrescante, combinando o sabor floral e levemente ácido do hibisco com o toque cítrico do limão. Ideal para quem busca uma opção natural e revigorante, perfeita para dias quentes.</p>
                    </div>
                </div>
                <div className='container_title'>
                    <h1>SALGADOS</h1>
                </div>
                <div className='produtosCardapio'>
                <div className='produtoIndividual'>
                        <div className='container_icon'>
                        <span class="material-icons-outlined">
                        bakery_dining
                            </span>
                        </div>
                        <h1>CROISSANT RECHEADO</h1>
                        <p>Massa folhada leve e crocante, com recheios irresistíveis como queijo, presunto ou peito de peru. Uma combinação perfeita de sabores para acompanhar seu café e tornar sua pausa ainda mais deliciosa.</p>
                    </div>

                    <div className='produtoIndividual'>
                        <div className='container_icon'>
                        <span class="material-icons-outlined">
                        bakery_dining
                        </span>
                        </div>
                        <h1>PÃO DE QUEIJO</h1>
                        <p>Tradicional pão de queijo mineiro, crocante por fora e macio por dentro. Feito com queijo de qualidade, é perfeito para saborear a qualquer hora do dia, especialmente acompanhado de um bom café.</p>
                    </div>
                    <div className='produtoIndividual'>
                        <div className='container_icon'>
                        <span class="material-icons-outlined">
                            bakery_dining
                            </span>
                        </div>
                        <h1>
                        ESFIRRAS</h1>
                        <p>Deliciosas esfirras recheadas, com massa leve e crocante. Podem ser encontradas em versões com carne, frango ou queijo, garantindo uma explosão de sabores a cada mordida. Ideais para um lanche rápido ou para acompanhar seu café na hora da leitura.</p>
                    </div>
                </div>
                <div className='container_title'>
                    <h1>DOCES</h1>
                </div>
                <div className='produtosCardapio'>
                <div className='produtoIndividual'>
                        <div className='container_icon'>
                        <span class="material-icons-outlined">
                            cookie
                            </span>
                        </div>
                        <h1>BROWNIE</h1>
                        <p>É um bolo denso e úmido, com uma textura irresistível e um sabor intenso de chocolate. Muitas vezes, é feito com pedaços de chocolate ou nozes, adicionando ainda mais sabor e crocância. Perfeito para acompanhar uma xícara de café ou chá, o brownie é uma escolha clássica para quem quer um doce reconfortante e delicioso.</p>
                    </div>

                    <div className='produtoIndividual'>
                        <div className='container_icon'>
                        <span class="material-icons-outlined">
                            cookie
                            </span>
                        </div>
                        <h1>COOKIES</h1>
                        <p>São biscoitos crocantes por fora e macios por dentro, muitas vezes recheados com pedaços de chocolate. Eles são um lanche delicioso e combinam bem com bebidas quentes. A mistura de texturas e sabores faz dos cookies uma opção favorita para quem busca um docinho para acompanhar o café ou chá.</p>
                    </div>
                    <div className='produtoIndividual'>
                        <div className='container_icon'>
                        <span class="material-icons-outlined">
                        cookie
                        </span>
                        </div>
                        <h1>BOLO DE CENOURA</h1>
                        <p>O bolo de cenoura é uma combinação deliciosa de cenoura ralada e uma cobertura de chocolate irresistível. Com uma massa bem fofinha, ele é perfeito para um lanche ou sobremesa. É aquele doce caseiro que faz a gente se sentir bem e sempre traz boas lembranças. Ideal para acompanhar um café ou chá, é um verdadeiro aconchego em forma de bolo.</p>
                    </div>
                </div>
            </section>
            <Footer/>

        </>
    );
};

export default Cardapio;
