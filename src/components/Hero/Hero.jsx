import TwitterIcon from '../icons/Twitter';
import './Hero.css'
import hero from "/hero.jpeg"
import FaceIcon from '../icons/Facebook';
import LinkedinIcon from '../icons/Linkedin';
import GithubIcon from '../icons/Github';

function Hero(params) {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-4 mt-md-0 d-flex justify-content-center align-items-center mb-4 mb-md-0">
          <img id="hero-img" src={hero} alt="Hero" className="img-fluid" style={{maxWidth:"75%"}}/>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center text-center text-md-left mb-4 mb-md-0 mt-4 mt-md-0">
          <h1 className="display-4 text-white font-weight-bold">¡Hola! Soy Pablo P&eacute;rez</h1>
          <p className="lead text-white font-italic">Desarrollador | Analista en Sistemas | Maestro Pok&eacute;mon</p>
          <a href="#about" className="btn btn-primary btn-lg mb-3">¡Conoceme!</a>
          <div className="social-icons d-flex justify-content-center justify-content-md-center">
            <FaceIcon/>
            <TwitterIcon/>
            <LinkedinIcon/>
            <GithubIcon/>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Hero;
