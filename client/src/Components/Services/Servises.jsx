
  return (
    <section className="services" id="services">

      <h1 className="heading"> our <span>services</span> </h1>

      <div className="box-container">

        <div className="box">
          <i className="fas fa-notes-medical"></i>
          <h3>free checkups</h3>
        </div>

        <div className="box">
          <i className="fas fa-gamepad"></i>
          <h3>free fun games </h3>
        </div>

        <div className="box">
          <i className="fas fa-user-md"></i>
          <h3>expert doctors</h3>
          <a href="#doctors" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
          <i className="fas fa-video"></i>
        </div>

      </div>

    </section>
  );
}

export default Services;
