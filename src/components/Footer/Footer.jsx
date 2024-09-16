import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css'; // Asegúrate de crear este archivo CSS para estilos personalizados

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
              <a href="https://facebook.com" className="text-white mx-2"><FaFacebook size={30} /></a>
              <a href="https://twitter.com" className="text-white mx-2"><FaTwitter size={30} /></a>
              <a href="https://linkedin.com" className="text-white mx-2"><FaLinkedin size={30} /></a>
              <a href="https://github.com" className="text-white mx-2"><FaGithub size={30} /></a>
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
