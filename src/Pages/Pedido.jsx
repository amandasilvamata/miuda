import React from 'react';
import Footer from '../inc/footer/footer';
import Header from '../inc/header/header';
import '../Pages/pagesCSS/pedido.css'



const PedidoForm = () => {
    return (
        <>
        <Header/>
        <main>
            <div className="container1pedido">
                <div className="dadosdopedido">Dados do Pedido</div>
            </div>
            <div className="paipedido">
                <div className="container2pedido">
                    {/* <form className="dadospedido"> */}
                        <input className="nomecompleto" type="text" placeholder="Nome completo: Senac Tito" disabled />
                        <br /><br />
                        {/* <input className="celular" type="text" placeholder="   Celular: " />
                        <br /><br /> */}
                        <input className="telefone" type="text" placeholder="   Celular/Telefone: (11) 2888-5500" disabled/>
                        <br /><br />
                        <input className="cep" type="text" placeholder="   CEP: 05051-000" disabled  />
                        <br /><br />
                        <input className="saopaulo" type="text" placeholder="Estado: São Paulo - São Paulo" disabled />
                        <br /><br />
                        {/* <input className="endereco" type="text" placeholder="Rua: Vila Romana" disabled /> */}
                        <input className="bairro" type="text" placeholder="Rua: Vila Romana" disabled />
                        <br /><br />
                        <input className="numero" type="text" placeholder="Número: 54" disabled />
                        <br /><br />
                        <input className="complemento" type="text" placeholder="   Complemento: " />
                        <br /><br /><br /><br /><br />
                        <a href="/pagamento">
                            <button>Continuar para o Pagamento</button>
                        </a>
                        <br /><br />
                    {/* </form> */}
                </div>
                <div className="container3pedido">
                    <div className="banana1pedido">
                        <div className="livro1pedido">
                            <div className="frente1pedido">
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    <img src="assets/images/diariodeumbananaazulumdois.jpg" alt="nada" className="img1pedido" />
                                </a>
                            </div>
                            <div className="inferior1pedido"></div>
                            <div className="folhas1pedido"></div>
                            <div className="marcador1pedido"></div>
                        </div>
                        <div className="diario1pedido">
                            <strong>Diário de um banana <br /></strong><br /><br />
                            <strong>R$ 36,90</strong>
                        </div>
                    </div>
                    <div className="line1pedido"></div>
                    <div className="banana1pedido">
                        <div className="livro1pedido">
                            <div className="frente1pedido">
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    <img src="/assets/images/omeninomaluquinho.jpg" alt="nada" className="img1pedido" />
                                </a>
                            </div>
                            <div className="inferior1pedido"></div>
                            <div className="folhas1pedido"></div>
                            <div className="marcador1pedido"></div>
                        </div>
                        <div className="diario1pedido">
                            <strong>O Menino Maluquinho <br /><br /><br /> R$ 30,00</strong>
                        </div>
                    </div>
                    <div className="line2pedido"></div>
                    <div className="banana1pedido">
                        <div className="livro1pedido">
                            <div className="frente1pedido">
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    <img src="assets/images/pequenopricipe.jpg" alt="nada" className="img1pedido" />
                                </a>
                            </div>
                            <div className="inferior1pedido"></div>
                            <div className="folhas1pedido"></div>
                            <div className="marcador1pedido"></div>
                        </div>
                        <div className="diario1pedido">
                            <strong>O Pequeno Príncipe <br /><br /><br /> R$ 34,90</strong>
                        </div>
                    </div>
                    <div className="line3pedido"></div>
                    <div className="custopedido">
                        <strong>
                            Custo Frete R$ 15,00<br /><br />
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
        <Footer/>
        </>
    );
};

export default PedidoForm;