import React from 'react'
import './Contact.css' // Importar el archivo CSS

function Contact() {
  const handleAddressClick = () => {
    window.open('https://www.google.com/maps/place/Avenida+Avellaneda+2270,+San+Fernando,+Buenos+Aires,+Argentina', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('https://wa.me/5491170990250', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:undelta@gmail.com', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/fundacionundelta', '_blank');
  };

  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com/@universidaddelta', '_blank');
  };

  const handleTikTokClick = () => {
    window.open('https://www.tiktok.com/@universidaddelta', '_blank');
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Aquí va tu contenido del componente Contact */}
        <h1>Contacto</h1>
        
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="contact-item" onClick={handleAddressClick} style={{cursor: 'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
                <h5>Dirección</h5>
                <p>Avenida Avellaneda 2270<br/>San Fernando, Buenos Aires</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-bank2" viewBox="0 0 16 16">
                  <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916zM12.375 6v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2M.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1z"/>
                </svg>
                <h5>Horario</h5>
                <p>Lun - Vie: 9:00 - 18:00<br/>Sáb: 9:00 - 14:00</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="contact-item" onClick={handlePhoneClick} style={{cursor: 'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                <h5>Teléfono</h5>
                <p>+54 9 11 7099-0250</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="contact-item" onClick={handleEmailClick} style={{cursor: 'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                </svg>
                <h5>Email</h5>
                <p>undelta@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de redes sociales */}
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h3>Seguínos en nuestras redes sociales</h3>
            </div>
            <div className="col-md-4 col-sm-6 mb-3">
              <div className="contact-item" onClick={handleInstagramClick} style={{cursor: 'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.374.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
                <h5>Instagram</h5>
                <p>@fundacionundelta</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-3">
              <div className="contact-item" onClick={handleYouTubeClick} style={{cursor: 'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                </svg>
                <h5>YouTube</h5>
                <p>Universidad Nacional del Delta</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-3">
              <div className="contact-item" onClick={handleTikTokClick} style={{cursor: 'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                </svg>
                <h5>TikTok</h5>
                <p>@universidaddelta</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario de contacto y mapa */}
        <div className="container mt-5">
          <div className="row">
            {/* Columna del formulario */}
            <div className="col-md-6 mb-4">
              <div className="contact-form">
                <h3 className="mb-4">Envíanos un mensaje</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Tu nombre completo" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="tu@email.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="motivo" className="form-label">Motivo de consulta</label>
                    <select className="form-select" id="motivo">
                      <option value="">Selecciona un motivo</option>
                      <option value="informacion">Información general</option>
                      <option value="cotizacion">Solicitar cotización</option>
                      <option value="soporte">Soporte técnico</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="mensaje" rows="5" placeholder="Escribe tu mensaje aquí..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg w-100">
                    <i className="fas fa-paper-plane me-2"></i>
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
            
            {/* Columna del mapa */}
            <div className="col-md-6 mb-4">
              <div className="map-container">
                <h3 className="mb-4">Nuestra ubicación</h3>
                <div className="map-wrapper">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.62052942414564!2d-58.558433539153775!3d-34.45396358036054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca5592b0ddc89%3A0xdbf46846b95b5b59!2sUniversidad%20Nacional%20del%20Delta%20(ex%20centro%20universitario%20municipal)!5e0!3m2!1ses!2sar!4v1749239083008!5m2!1ses!2sar"
                    width="100%" 
                    height="450" 
                    style={{border: 0, borderRadius: '10px'}}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de la empresa">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact