import React from 'react';
import Footer from '../inc/footer/footer';
import Header from '../inc/header/header';
import '../Pages/pagesCSS/meuspedidos.css'

const MeusPedidos = () => {
    return (
        <>
        <Header/>
        <main>
            <div className="container1">
                <div className="meuspedidos">MEUS PEDIDOS</div>
            </div>
            <div className="paipedidos">
                <div className="container22">
                    {/* Pedido 1 */}
                    <div className="retan1">
                        <div className="barra1">
                            <strong>
                            Pedido Realizado | 25/10/2024
                            </strong>
                        </div>
                        <div className="banana1pedidos">
                            <div className="livro1pedidos">
                                <div className="frente1pedidos">
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <img src="assets/images/diariodeumbananaazulumdois.jpg" alt="nada" className="img1pedidos" />
                                    </a>
                                </div>
                                <div className="inferior1pedidos"></div>
                                <div className="folhas1pedidos"></div>
                                <div className="marcador1pedidos"></div>
                            </div>
                            <div className="p1pedidos">
                                <div className="titulopedidos">
                                    <strong>Diário de um Banana <br /></strong>
                                </div>
                                <div className="entregapedidos">
                                    Entregue em <strong>aguardando pagamento</strong> <br />
                                    Pedido Recebido por <strong>Indefindo</strong>
                                </div>
                            </div>
                            <div className="p2pedidos">
                                <div className="rastrearpedidos">
                                    <strong><a href="https://rastreamento.correios.com.br/" target='_blank'>Rastrear Pedido</a></strong>
                                </div>
                                <div className="solicitarpedidos">
                                <strong><a href="https://www.instagram.com/livrariamiuda/" target='_blank'>Solicitar Devolução</a></strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pedido 2 */}
                     <br /><br />
                    <div className="retan2">
                        <div className="barra2">
                            <strong>
                                Pedido Realizado | 25/10/2024<br />
                                
                            </strong>
                        </div>
                        <div className="banana2pedidos">
                            <div className="livro2pedidos">
                                <div className="frente2pedidos">
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <img src="/assets/images/omeninomaluquinho.jpg" alt="nada" className="img2pedidos" />
                                    </a>
                                </div>
                                <div className="inferior2pedidos"></div>
                                <div className="folhas2pedidos"></div>
                                <div className="marcador2pedidos"></div>
                            </div>
                            <div className="p1pedidos">
                                <div className="titulopedidos">
                                    <strong>O Menino Maluquinho <br /></strong>
                                </div>
                                <div className="entregapedidos">
                                Entregue em <strong>aguardando pagamento</strong> <br />
                                Pedido Recebido por <strong>Indefindo</strong>
                                </div>
                            </div>
                            <div className="p2pedidos">
                                <div className="rastrearpedidos">
                                <strong><a href="https://rastreamento.correios.com.br/" target='_blank'>Rastrear Pedido</a></strong>
                                </div>
                                <div className="solicitarpedidos">
                                <strong><a href="https://www.instagram.com/livrariamiuda/" target='_blank'>Solicitar Devolução</a></strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pedido 3 */}
                    <br /><br />
                    <div className="retan3">
                        <div className="barra3">
                            <strong>
                            Pedido Realizado | 25/10/2024
                            </strong>
                        </div>
                        <div className="banana3pedidos">
                            <div className="livro3pedidos">
                                <div className="frente3pedidos">
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <img src="assets/images/pequenopricipe.jpg" alt="nada" className="img3pedidos" />
                                    </a>
                                </div>
                                <div className="inferior3pedidos"></div>
                                <div className="folhas3pedidos"></div>
                                <div className="marcador3pedidos"></div>
                            </div>
                            <div className="p1pedidos">
                                <div className="titulopedidos">
                                    <strong>O Pequeno Príncipe <br /></strong>
                                </div>
                                <div className="entregapedidos">
                                Entregue em <strong>aguardando pagamento</strong> <br />
                                Pedido Recebido por <strong>Indefindo</strong>
                                </div>
                            </div>
                            <div className="p2pedidos">
                                <div className="rastrearpedidos">
                                <strong><a href="https://rastreamento.correios.com.br/" target='_blank'>Rastrear Pedido</a></strong>
                                </div>
                                <div className="solicitarpedidos">
                                    <strong><a href="https://www.instagram.com/livrariamiuda/" target='_blank'>Solicitar Devolução</a></strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        <br />
        <br />
        <br />
        <br />
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

export default MeusPedidos;