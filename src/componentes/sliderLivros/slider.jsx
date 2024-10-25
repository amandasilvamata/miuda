import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../sliderLivros/slider.css'; // Importando o CSS customizado
import LivroModeloCompra from '../livroModeloCompra/livroModeloCompra';

const SliderComponent = () => {
    const sliderRef = useRef(null); // Criando uma referência para o slider

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Mostra 5 slides por vez
        slidesToScroll: 1, // Rola 1 slide por vez
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container">
            <Slider ref={sliderRef} {...settings}>
                <div className="slide">
                    <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' titulo='Os três porquinhos' corLivro='purple'
                    preco='R$ 25,90'/>
                </div>
                {/* Adicione mais slides aqui */}
                <div className="slide">
                <LivroModeloCompra caminhoImagem='https://m.media-amazon.com/images/I/71fWaI5myqL._AC_UF1000,1000_QL80_.jpg' titulo='Diario de um Banana' corLivro='purple' preco='R$ 35,00'/>
                </div>
                <div className="slide">
                <LivroModeloCompra caminhoImagem='assets/images/pequenopricipe.jpg' corLivro='purple' titulo='O Pequeno Príncipe' preco='R$ 34,90'/>
                </div>
                <div className="slide">
                <LivroModeloCompra caminhoImagem='assets/images/adivinhaquantoeuteamo.jpg' corLivro='purple' titulo='Adivinha Quanto Eu...' preco='R$ 36,50'/>
                </div>
                <div className="slide">
                <LivroModeloCompra caminhoImagem='assets/images/marcelomarmelomartelo.jpg' titulo='Marcelo, Marmelo...' corLivro='purple' preco='R$ 39,90'/>
                  </div>
                <div className="slide">
                <LivroModeloCompra caminhoImagem='https://m.media-amazon.com/images/I/71wWf-C-aUL._AC_UF1000,1000_QL80_.jpg' titulo='Rapunzel' corLivro='purple' preco='R$ 34,90'/>
                </div>
                
            </Slider>

        </div>
    );
};

export default SliderComponent;
