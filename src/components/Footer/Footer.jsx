import React from 'react';
import Logopng from './logofundelta.png';

function Footer() {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/undelta', '_blank');
  };

  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com/@undelta', '_blank');
  };

  const handleTikTokClick = () => {
    window.open('https://www.tiktok.com/@undelta', '_blank');
  };

  return (
    <footer
      className="container-fluid border-top p-4"
      style={{ backgroundColor: '#000000', position: 'relative' }}
    >
      <div className="row align-items-center text-center text-md-start">

        {/* Columna 1: Derechos */}
        <div className="col-12 col-md-4 mb-3 mb-md-0">
          <p className="mb-0 text-white fonttext">© 2025 Todos los derechos reservados</p>
        </div>

        {/* Columna 2: Logo */}
        <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center">
          <a href="/" className="text-decoration-none" aria-label="Logo">
            <img
              src={Logopng}
              alt="Logo"
              className="img-fluid"
              style={{ maxHeight: '40px' }}
            />
          </a>
        </div>

        {/* Columna 3: Links + Redes */}
        <div className="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-end">
          {/* Links */}
          <ul className="nav mb-2">
            <li className="nav-item">
              <a href="/donar" className="nav-link px-2 text-white fonttext">Donar</a>
            </li>
            <li className="nav-item">
              <a href="/contacto" className="nav-link px-2 text-white fonttext">Contacto</a>
            </li>
            <li className="nav-item">
              <a href="https://undelta.edu.ar/" className="nav-link px-2 text-white fonttext">UnDelta</a>
            </li>
          </ul>

          {/* Redes */}
          <div className="d-flex gap-3">
            {/* Instagram */}
            <button
              onClick={handleInstagramClick}
              className="btn p-0 text-white"
              style={{ background: 'none', border: 'none' }}
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.8 0 5.5.01 4.7.05 3.8.09 3.3.22 2.8.42a4 4 0 0 0-1.4.92A4 4 0 0 0 .42 2.8c-.2.5-.34 1-.37 1.9C.01 5.5 0 5.8 0 8s.01 2.5.05 3.3c.03.9.17 1.4.37 1.9.2.5.5.9.9 1.4.4.4.9.7 1.4.9.5.2 1 .34 1.9.37C5.5 15.99 5.8 16 8 16s2.5-.01 3.3-.05c.9-.03 1.4-.17 1.9-.37.5-.2.9-.5 1.4-.9.4-.4.7-.9.9-1.4.2-.5.34-1 .37-1.9.04-.8.05-1.1.05-3.3s-.01-2.5-.05-3.3c-.03-.9-.17-1.4-.37-1.9a4 4 0 0 0-.9-1.4 4 4 0 0 0-1.4-.9c-.5-.2-1-.34-1.9-.37C10.5.01 10.2 0 8 0zm0 1.44h.7c2.1 0 2.4.01 3.2.05.8.03 1.2.16 1.5.27.4.15.6.32.9.6.3.3.45.5.6.9.1.3.24.7.28 1.5.04.8.05 1.1.05 3.2s-.01 2.4-.05 3.2c-.04.8-.16 1.2-.28 1.5-.15.4-.32.6-.6.9-.3.3-.5.45-.9.6-.3.1-.7.24-1.5.28-.8.04-1.1.05-3.2.05s-2.4-.01-3.2-.05c-.8-.04-1.2-.16-1.5-.28a2.6 2.6 0 0 1-.9-.6 2.6 2.6 0 0 1-.6-.9c-.12-.3-.24-.7-.28-1.5C1.45 10.4 1.44 10.1 1.44 8s.01-2.4.05-3.2c.04-.8.16-1.2.28-1.5.15-.4.32-.6.6-.9.3-.3.5-.45.9-.6.3-.1.7-.24 1.5-.28.7-.03 1-.05 3.2-.05zM8 3.9a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2zm0 1.44a2.67 2.67 0 1 1 0 5.33A2.67 2.67 0 0 1 8 5.34zm4.99-1.32a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92z"/>
              </svg>
            </button>

            {/* YouTube */}
            <button
              onClick={handleYouTubeClick}
              className="btn p-0 text-white"
              style={{ background: 'none', border: 'none' }}
              aria-label="YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.09c.82.003 4.99.033 6.11.335.6.16 1.1.63 1.3 1.24.1.38.17.88.22 1.4.07.91.07 1.77.08 1.96v.08c0 .2-.01 1.1-.08 2.06-.05.57-.12 1.14-.23 1.56-.2.61-.7 1.08-1.3 1.24-1.16.31-5.57.33-6.18.33h-.14c-.31 0-1.59-.01-2.93-.05a47 47 0 0 1-.43-.02c-1.11-.05-2.17-.13-2.65-.26a2 2 0 0 1-1.42-1.42c-.11-.42-.18-.99-.24-1.56l-.01-.1A31 31 0 0 1 0 7.68v-.12c.01-.21.01-.96.07-1.78l.01-.1.01-.05.01-.1.02-.26.01-.1c.05-.52.12-1.03.22-1.4a2 2 0 0 1 1.42-1.42c.49-.13 1.54-.21 2.65-.26a48 48 0 0 1 .43-.02c1.34-.05 2.62-.05 2.93-.05zm-1.65 3.21v4.82l4.16-2.41z"/>
              </svg>
            </button>

            {/* TikTok */}
            <button
              onClick={handleTikTokClick}
              className="btn p-0 text-white"
              style={{ background: 'none', border: 'none' }}
              aria-label="TikTok"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.14.71.54 1.62 1.23 2.51C12.9 3.39 13.8 4 15 4v2c-1.75 0-3.07-.81-4-1.83V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0z"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
