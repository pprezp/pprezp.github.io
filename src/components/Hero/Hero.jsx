import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Hero.css'
function Hero(params) {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
          <img src="https://via.placeholder.com/500" alt="Hero" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center text-center text-md-left">
          <h1 className="display-4 text-white font-weight-bold">¡Hola! Soy [Tu Nombre]</h1>
          <p className="lead text-white font-italic">Desarrollador Web | Diseñador | Freelancer</p>
          <a href="#portfolio" className="btn btn-primary btn-lg mb-3">Ver mi trabajo</a>
          <div className="social-icons d-flex justify-content-center justify-content-md-center">
            <a href="https://facebook.com" className="text-white mx-2"><FaFacebook size={30} /></a>
            <a href="https://twitter.com" className="text-white mx-2"><FaTwitter size={30} /></a>
            <a href="https://linkedin.com" className="text-white mx-2"><FaLinkedin size={30} /></a>
            <a href="https://github.com" className="text-white mx-2"><FaGithub size={30} /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Hero;
