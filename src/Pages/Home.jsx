
import '../App.css';
import Header from '../inc/header/header';
import Footer from '../inc/footer/footer'
import '../Pages/pagesCSS/home.css'
import BarraCategoria from '../componentes/barraCategorias/categorias'
import SliderComponent from '../componentes/sliderLivros/slider';
import LivroModelo from '../componentes/livroModelo/livromodelo';
import LivroModeloCompra from '../componentes/livroModeloCompra/livroModeloCompra'
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
    <Helmet>
                <title>Home | Livraria Miuda</title>
                <meta name="description" content="Pagina Home" />
            </Helmet>
      <Header />
      <BarraCategoria />
      <h1 className='title_eventos'>Eventos</h1>
      <section className="eventos">
        
        <div className="sectionEvent1">
          
          <div className='container_image'>
            <img src="/assets/images/evento1.svg" alt="" />
          </div>
          <div className='container_information'>
            <h2>Informações</h2>
         

            <p>Convite para o Lançamento do Livro "Tem Gato na Tuba". É com grande alegria que convidamos você para o lançamento do livro "Tem Gato na Tuba", uma obra que promete encantar leitores de todas as idades! Data: 23 de março. Horário: Das 15h às 17h. Local: Livraria Miúda. Venha celebrar conosco este momento especial! O autor estará presente para conversar sobre o livro, autografar exemplares e compartilhar suas inspirações. Haverá também uma sessão de leitura e atividades interativas para as crianças. A Livraria Miúda estará decorada para receber você e sua família em um ambiente acolhedor, repleto de livros e criatividade. Não perca essa oportunidade de mergulhar no mundo mágico de "Tem Gato na Tuba"! Traga seus amigos e familiares, e venha fazer parte desta festa literária! Esperamos por você! Atenciosamente, Equipe da Livraria Miúda</p>
          </div>
        </div>
        <div className="sectionEvent2">
        <img src="/assets/images/evento1.svg" alt="" />
        </div>
      </section>
      <section className='populares'>
        <h1>Populares</h1>
        <SliderComponent/>
      </section>
      <section className='livros'>
      <h1>Livros</h1>
    
        <div className='container_livros'>
        <LivroModeloCompra caminhoImagem='/assets/images/diariodeumbananaazulum.jpg' corLivro='purple' titulo='Diário de um Banana' preco='R$ 32,00'/>
        <LivroModeloCompra caminhoImagem='/assets/images/ohobbit.jpg' corLivro='purple' titulo='O Hobbit' preco='R$ 49,90'/>
        <LivroModeloCompra caminhoImagem='/assets/images/diariodeumbananaazulumdois.jpg' corLivro='purple' titulo='Diário de um Banana' preco='R$ 36,90'/>
        <LivroModeloCompra caminhoImagem='/assets/images/omeninodalua.jpg' corLivro='purple' titulo='O Menino da Lua' preco='R$ 45,50'/>
        <LivroModeloCompra caminhoImagem='/assets/images/oprincipepreto.png' corLivro='purple' titulo='O Pequeno Príncipe Preto' preco='R$ 28,99'/>
        </div>

        <div className='container_livros'>
        <LivroModeloCompra caminhoImagem='/assets/images/omeninoquenaosabialer.jpg' corLivro='purple' titulo='O Menino que Não..' preco='R$ 29,90'/>
        <LivroModeloCompra caminhoImagem='/assets/images/istonaoeumacenoura.jpg' corLivro='purple' titulo='Isto Não é Uma Cenoura' preco='R$ 19,99'/>
        <LivroModeloCompra caminhoImagem='/assets/images/diariodeumbananalaranja.png' corLivro='purple' titulo='Diário de um Banana' preco='R$ 32,00'/>
        <LivroModeloCompra caminhoImagem='/assets/images/omeninomaluquinho.jpg' corLivro='purple' titulo='O Menino Maluquinho' preco='R$ 30,00'/>
        <LivroModeloCompra caminhoImagem='/assets/images/diariodeumbananaamarelo.jpg' corLivro='purple' titulo='Diário de Um Banana' preco='R$ 32,00'/>
        </div>
      
      </section>
      <section className='ordem'>
        <button className='ordem_number'>1</button>
        <button className='ordem_number'>2</button>
        <button className='ordem_number'>3</button>
      </section>
      <Footer/>
    </>
  );
}

export default Home;

