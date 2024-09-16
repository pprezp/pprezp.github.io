import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css'; 
import TwitterIcon from '../icons/Twitter';
import FaceIcon from '../icons/Facebook';
import LinkedinIcon from '../icons/Linkedin';
import GithubIcon from '../icons/Github';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <Container>
        <Row className="py-4">
          <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
            <h5>Sobre mí</h5>
            <p>Desarrollador web apasionado por crear soluciones digitales innovadoras y efectivas.</p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Inicio</a></li>
              <li><a href="#about" className="text-white">Acerca de mí</a></li>
              <li><a href="#skills" className="text-white">Skills</a></li>
              <li><a href="#experience" className="text-white">Experiencia</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-right">
            <h5>Sígueme</h5>
            <div className="social-icons">
              <FaceIcon/>
              <TwitterIcon/>
              <LinkedinIcon/>
              <GithubIcon/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p className="mb-0">© {new Date().getFullYear()} pprezp. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
