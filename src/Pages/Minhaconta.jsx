import React from 'react';
import Footer from '../inc/footer/footer';
import Header from '../inc/header/header';
import '../Pages/pagesCSS/minhaconta.css';

const MinhaConta = () => {
    return (
        <>
        <Header/>
    
        <main>
            <div className="pai">
                <div className="container2">
                    <div className="book">
                        <strong>BEM-VINDO(A)!</strong>
                    </div>
                    <div className="book1">
                        <div className="banana1">
                            <div className="livro1">
                                <div className="frente1">
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <img src="/assets/images/miuda.jpg" alt="nada" className="img1" />
                                    </a>
                                </div>
                                <div className="inferior1"></div>
                                <div className="folhas1"></div>
                                <div className="marcador1"></div>
                                <div className="nomeesobrenome"><strong>SENAC TITO</strong></div>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
                <div className="container33">
                    <div className="pay">
                        <strong>MINHA CONTA</strong>
                    </div>
                    <div className="dados">
                        <br /><br />
                        <div className="meusdados2">
                            <p><a href="/meus-dados">MEUS DADOS</a></p>
                        </div>
                        <br /><br />
                        <div className="favoritos2">
                            <p><a href="/favoritos">FAVORITOS</a></p>
                        </div>
                        <br /><br />
                        <div className="meuspedidos2">
                            <p><a href="/meus-pedidos">MEUS PEDIDOS</a></p>
                        </div>
                        <br /><br /><br />
                        <button>SAIR</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    );
};

export default MinhaConta;