const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a
            href="https://github.com/MatBordini"
            target="_blank"
            rel="noreferrer"
          >
            Matheus Bordini
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Evento promovido pela escola DevSuperior:{" "}
            <a
              href="https://instagram.com/matheusbordini"
              target="_blank"
              rel="noreferrer"
            >
              @matheusbordini
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
