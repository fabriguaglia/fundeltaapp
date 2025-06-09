import React from 'react'
import Logopng from './logo UNDELTA PNG blanco.png'

function Footer() {
  return (
    <footer
        className="container-fluid border-top p-4"
        style={{ backgroundColor: '#000000', position: 'relative' }}
      >
        <div className="row align-items-center text-center text-md-start">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <p className="mb-0 text-white fonttext">© 2025 Todos los derechos reservados</p>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center">
            <a href="/" className="text-decoration-none" aria-label="Logo">
              <img
                src={Logopng}
                alt="Logo"
                className="img-fluid"
                style={{ maxHeight: '120px' }}
              />
            </a>
          </div>
          <div className="col-12 col-md-4">
            <ul className="nav justify-content-center justify-content-md-end">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-white fonttext">Donar</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-white fonttext">Contacto</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-white fonttext">Universidad</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-white fonttext">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  )
}

export default Footer