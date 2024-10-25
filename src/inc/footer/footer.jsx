
import '../footer/footer.css';

function Footer() {
 return(
    <main>
       <footer>
         <div className='container_socials'>
            <h1>Livraria Miuda</h1>
            <p>Literatura para a infância</p>
            <div>
               <img src="../assets/images/icons/instagram.svg" alt="LOGO INSTAGRAM" />
               <img src="../assets/images/icons/facebook.svg" alt="LOGO FACEBOOK" />
               <img src="../assets/images/icons/whatsapp.svg" alt="LOGO WHATSAPP" />
            </div>
         </div>
         <div>
            <h1>Blog</h1>
            <p>Lorem ipsum dolor sit amet </p>
            <p>Lorem ipsum dolor sit amet </p>
            <p>Lorem ipsum dolor sit amet </p>
         </div>
         <div>
         <h1>Products</h1>
            <p>Lorem ipsum dolor sit amet </p>
            <p>Lorem ipsum dolor sit amet </p>
            <p>Lorem ipsum dolor sit amet </p>
         </div>
         <div className='cadastrarEmail'>
         <h1>Cadastrar Email</h1>
         <p>Cadastre seu e-mail para receber todas as novidades!</p>
         <div className="input-container">
       <input type="email" name="email" placeholder="Digite Seu Email" />
       <span className="material-icons-outlined iconEmail">email</span>
         </div>
       </div>
       </footer>
    </main>
 )
}

export default Footer;
