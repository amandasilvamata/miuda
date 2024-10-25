import React from 'react';
import Footer from '../inc/footer/footer';
import Header from '../inc/header/header';
import '../Pages/pagesCSS/pagamento.css'
import BarraCategoria from '../componentes/barraCategorias/categorias'

const FormaDePagamento = () => {
    return (
        <>
        <Header/>
        <main>
            <div className="paipagamento">
                <div className="container23pagamento">
                    <div className="paypagamento">
                        <strong>Forma de Pagamento</strong>
                    </div>
                    <div className="dadospagamento">
                        <br /><br />
                        <div className="credito">
                            <img src="/assets/images/credit-card.png" className="creditar" width="30px" alt="" />
                            <p>Cartão de crédito ou débito</p>
                        </div>
                        <br /><br />
                        <div className="boleto">
                            <img src="/assets/images/barcode.png" className="boletar" width="30px" alt="" />
                            Boleto Bancário
                            <p>Boletokkk</p>
                        </div>
                        <br /><br />
                        <div className="pix">
                            <img src="/assets/images/pix.png" width="30px" alt="" className="pix1" />
                            Pix
                            <p className="woloko">dadsdasdasadsllPix</p>
                        </div>
                        <br /><br /><br />
                        <a href="/realizado">
                            <button>Finalizar Pedido</button>
                        </a>
                        <br /><br />
                    </div>
                </div>
                <div className="container23pagamento">
                    <div className="banana1pagamento">
                        <div className="livro1pagamento">
                            <div className="frente1pagamento">
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    <img src="assets/images/diariodeumbananaazulumdois.jpg" alt="nada" className="img1pagamento" />
                                </a>
                            </div>
                            <div className="inferior1pagamento"></div>
                            <div className="folhas1pagamento"></div>
                            <div className="marcador1pagamento"></div>
                        </div>
                        <div className="diario1pagamento">
                            <strong>Diário de um banana: <br /></strong><br /><br />
                            <strong>R$ 36,90</strong>
                        </div>
                    </div>
                    <div className="line1pagamento"></div>
                    <div className="banana1pagamento">
                        <div className="livro1pagamento">
                            <div className="frente1pagamento">
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    <img src="/assets/images/omeninomaluquinho.jpg" alt="nada" className="img1pagamento" />
                                </a>
                            </div>
                            <div className="inferior1pagamento"></div>
                            <div className="folhas1pagamento"></div>
                            <div className="marcador1pagamento"></div>
                        </div>
                        <div className="diario1pagamento">
                            <strong>O Menino Maluquinho <br /><br /><br /> R$ 30,00</strong>
                        </div>
                    </div>
                    <div className="line2pagamento"></div>
                    <div className="banana1pagamento">
                        <div className="livro1pagamento">
                            <div className="frente1pagamento">
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    <img src="assets/images/pequenopricipe.jpg" alt="nada" className="img1pagamento" />
                                </a>
                            </div>
                            <div className="inferior1pagamento"></div>
                            <div className="folhas1pagamento"></div>
                            <div className="marcador1pagamento"></div>
                        </div>
                        <div className="diario1pagamento">
                            <strong>O Pequeno Príncipe <br /><br /><br /> R$ 34,90</strong>
                        </div>
                    </div>
                    <div className="line3pagamento"></div>
                    <div className="custopagamento">
                        <strong>
                        Custo Frete R$ 15,00<br />
                        Total: R$ 116,80
                        </strong>
                    </div>
                </div>
            </div>
        </main>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer/>
        </>
        
    );
};

export default FormaDePagamento;