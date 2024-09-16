import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import './SkillsSection.css'; 

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section d-flex align-items-center">
      <Container>
        <Row>
          <Col xs={12} className="text-center mb-5">
            <h2 className="text-white font-weight-bold">Mis Habilidades</h2>
          </Col>
          <Col md={6} className="mb-4 mb-md-0 d-flex justify-content-center">
            <div className="skills-content p-4" style={{minWidth:"95%"}}>
              <h3 className="text-white font-weight-bold">Hard Skills</h3>
              <ul className="list-unstyled text-white">
                <li className="mb-3">
                  Programación en Java
                  <ProgressBar now={80} label={`${80}%`} />
                </li>
                <li className="mb-3">
                  Desarrollo con React
                  <ProgressBar now={75} label={`${75}%`} />
                </li>
                <li className="mb-3">
                  Diseño de Bases de Datos
                  <ProgressBar now={70} label={`${70}%`} />
                </li>
                <li className="mb-3">
                  Control de Versiones con Git
                  <ProgressBar now={85} label={`${85}%`} />
                </li>
                <li className="mb-3">
                  Desarrollo de APIs REST
                  <ProgressBar now={65} label={`${65}%`} />
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6} className='d-flex justify-content-center'>
            <div className="skills-content p-4" style={{minWidth:"95%"}}>
              <h3 className="text-white font-weight-bold">Soft Skills</h3>
              <ul className="list-unstyled text-white">
                <li>Comunicación Efectiva</li>
                <li>Trabajo en Equipo</li>
                <li>Resolución de Problemas</li>
                <li>Adaptabilidad</li>
                <li>Liderazgo</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;
