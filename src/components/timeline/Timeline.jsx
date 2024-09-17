import { Container, Col, Row, Card } from "react-bootstrap";
import "./TimeLine.css";

const TimeLine = () => {
  const events = [
    { year: "2020", description: "Comencé mi carrera como desarrollador." },
    { year: "2021", description: "Trabajé en varios proyectos freelance." },
    { year: "2022", description: "Me uní a una startup tecnológica." },
    { year: "2023", description: "Desarrollé una aplicación web exitosa." },
    { year: "2022", description: "Me uní a una startup tecnológica." },
    { year: "2023", description: "Desarrollé una aplicación web exitosa." },
  ];
  return (
    <section
      id="experience"
      className="timeline-section d-flex align-items-center"
    >
      <Container className="timeline">
        <Row>
          <Col xs={12} className="text-center mb-5">
            <h2 className="text-white font-weight-bold">Mi experiencia Profesional</h2>
          </Col>
          <div className="timeline-line"></div>
          {events.map((event, index) => (
            <Row
              key={index}
              className={
                index % 2 === 0
                  ? "timeline-left timeline-item"
                  : "timeline-right timeline-item"
              }
            >
              <Col md={6} className="timeline-info">
                <Card className="timeline-card">
                  <Card.Body className="timeline-card-body">
                    <Card.Title>{event.year + " " + event.description}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TimeLine;
