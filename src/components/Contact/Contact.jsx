import React from 'react'
import './Contact.css' // Importar el archivo CSS

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Aquí va tu contenido del componente Contact */}
        <h1>Contacto</h1>
        
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
                <h5>Dirección</h5>
                <p>Avenida Avellaneda 2270<br/>San Fernando, Buenos Aires</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-bank2" viewBox="0 0 16 16">
  <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916zM12.375 6v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2M.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1z"/>
</svg>
                <h5>Horario</h5>
                <p>Lun - Vie: 9:00 - 18:00<br/>Sáb: 9:00 - 14:00</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
                <h5>Teléfono</h5>
                <p>+54 9 11 7099-0250</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
</svg>
                <h5>Email</h5>
                <p>undelta@gmail.com</p>
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