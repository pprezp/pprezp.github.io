import './About.css'; // Asegúrate de crear este archivo CSS para estilos personalizados

const About = () => {
  return (
    <section id="about" className="about-section d-flex align-items-center ">
      <div className="ccontainer-fluid p-0">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <img src="https://via.placeholder.com/500" alt="About" className="img-fluid full-width-image" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center text-center text-md-left mb-4 mb-md-0">
            <div className="about-content p-4">
              <h2 className="text-white font-weight-bold">Sobre mí</h2>
              <p className="lead text-white font-italic">¡Hola! Soy [Tu Nombre], un desarrollador web, diseñador y freelancer. Me apasiona crear soluciones digitales innovadoras y efectivas. ¡Echa un vistazo a mi trabajo!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;