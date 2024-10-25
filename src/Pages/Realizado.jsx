import React from 'react';
import Footer from '../inc/footer/footer';
import Header from '../inc/header/header';
import '../Pages/pagesCSS/realizado.css'

const Realizado = () => {
    
    return (
        <>
        <Header/>
        <main>
            <div className="pedidospai">
                <div className="pedidospai2">
                    <h1>PEDIDO REALIZADO!</h1>
                    <img src="/assets/images/party.svg" width="50px" alt="Festa" />
                    <h5>Acompanhe o pedido:</h5>
                    <a href="/meus-pedidos">
                        <button className='buttonpai'>Meus Pedidos</button>
                    </a>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    );
};

export default Realizado;