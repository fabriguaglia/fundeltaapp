import { useEffect, useState } from "react";
import { Link } from "react-router";
import Logo from "./logofundelta.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    // Cerrar el offcanvas
    const offcanvasElement = document.getElementById('offcanvasRight');
    if (offcanvasElement) {
      const offcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvasElement);
      if (offcanvas) {
        offcanvas.hide();
      }
    }
    
    // Refrescar la página después de un pequeño delay para que el offcanvas se cierre
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <header
      className={`d-flex justify-content-between align-items-center px-4 py-3 fixed-top w-100 transition`}
      style={{
        backgroundColor: scrolled ? "#000000" : "transparent",
        transition: "background-color 0.3s ease",
        zIndex: 1000,
      }}
    >
      <a href="/" className="icon" rel="noreferrer" style={{marginLeft: '-20px'}}>
        <img className="greensock-icon" src={Logo} width="200" alt="Logo" />
      </a>
      <ul className="d-flex gap-4 list-unstyled mb-0 align-items-center">
        <li className="d-flex align-items-center">
          <Link className="text-white text-decoration-none fonttext" to="/donar" style={{lineHeight: 1}}>Donar</Link>
        </li>
        <li className="d-flex align-items-center">
          <button className="btn text-white fs-4 p-0 border-0 d-flex align-items-center justify-content-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{backgroundColor: 'transparent', lineHeight: 1, height: '24px', width: '24px'}}>≡</button>
        </li>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">Menú</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="list-unstyled d-flex flex-column gap-4">
              <li className="d-flex align-items-center py-2">
                <Link className="text-black text-decoration-none fonttext fs-6" to="/" onClick={handleLinkClick} style={{lineHeight: 1}}>Inicio</Link>
              </li>
              <li className="d-flex align-items-center py-2">
                <Link className="text-black text-decoration-none fonttext fs-6" to="/contacto" onClick={handleLinkClick} style={{lineHeight: 1}}>Contacto</Link>
              </li>
              <li className="d-flex align-items-center py-2">
                <Link className="text-black text-decoration-none fonttext fs-6" to="/informes" onClick={handleLinkClick} style={{lineHeight: 1}}>Informes</Link>
              </li>
              <li className="d-flex align-items-center py-2">
                <Link className="text-black text-decoration-none fonttext fs-6" to="/propuestas" onClick={handleLinkClick} style={{lineHeight: 1}}>Propuestas</Link>
              </li>
              <li className="d-flex align-items-center py-2">
                <Link className="text-black text-decoration-none fonttext fs-6" to="/acuerdos" onClick={handleLinkClick} style={{lineHeight: 1}}>Acuerdos</Link>
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </header>
  );
}