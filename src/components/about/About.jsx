import "./About.css"; 
import about from "/about.jpeg";
const About = () => {
  return (
    <section id="about" className="about-section d-flex align-items-center ">
      <div className="ccontainer-fluid p-0">
        <div className="row no-gutters">
          <div className="col-lg-6 mb-4 mb-md-0">
            <img
              src={about}
              alt="About"
              className="img-fluid full-width-image"
            />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center text-center text-md-left mb-4 mb-md-0">
            <div className="about-content p-4" style={{ maxWidth: "90%" }}>
              <h2 className="text-white font-weight-bold">Sobre mí</h2>
              <p className="lead text-white font-italic" style={{textAlign:"justify"}}>
                ¡Hola! Soy Pablo, un apasionado desarrollador de software con
                talento para crear desde aplicaciones web dinámicas y fáciles de
                usar hasta servicios backend asi como de la creación de
                infraestructura en la nube. Con una sólida experiencia en
                múltiples lenguajes de programación, me especializo en construir
                soluciones responsivas y eficientes que satisfacen las
                necesidades de los usuarios modernos.
              </p>
              <br />
              <h2 className="text-white font-weight-bold">Mi Trayectoria</h2>
              <p className="lead text-white font-italic" style={{textAlign:"justify"}}>
                Hace 12 años fue cuando descubrí mi amor por el código y la
                tecnología. Desde entonces, me he dedicado a aprender acerca de
                diversas tecnologías y frameworks que puedan resultar útil para
                solucionar los retos a los que me enfrento en mi día a día,
                siempre esforzándome por estar a la vanguardia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
