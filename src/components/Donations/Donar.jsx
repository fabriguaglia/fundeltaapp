import React from 'react'
import './Donar.css' // Importar el archivo CSS

function Donations() {
  return (
    <div className="donations-container">
      <div className="donations-content">
        {/* Título principal */}
        <h1>Donaciones</h1>
        
        {/* Texto introductorio */}
        <div className="intro-text">
          <p>En la <strong>Fundación de la Universidad Nacional del Delta</strong> creemos que la confianza se construye con hechos. Por eso, asumimos el compromiso de gestionar cada recurso con responsabilidad, eficiencia y absoluta transparencia.</p>
          
          <p>Cada aporte recibido se transforma en acciones concretas. Creemos en una gestión abierta, donde cada persona o institución que colabore pueda ver claramente el destino y los resultados de su contribución.</p>
          
          <p>Cada donación es una inversión en conocimiento, inclusión y futuro.</p>
          
          <p className="highlight"><strong>Colaborar es sembrar futuro. Gracias por ser parte.</strong></p>
        </div>

        {/* Formas de pago */}
        <div className="container mt-5">
          <h2 className="section-title mb-4">Formas de Pago</h2>
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="payment-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-credit-card-fill" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1"/>
                </svg>
                <h5>Tarjeta de Crédito</h5>
                <p>Visa, Mastercard<br/>American Express</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="payment-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-bank" viewBox="0 0 16 16">
                  <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zm2 0v7h1V6z"/>
                </svg>
                <h5>Transferencia</h5>
                <p>Bancaria<br/>CBU disponible</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="payment-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-qr-code" viewBox="0 0 16 16">
                  <path d="M2 2h2v2H2z"/>
                  <path d="M6 0v6H0V0zM5 1H1v4h4zM4 12H2v2h2z"/>
                  <path d="M6 10v6H0v-6zm-5 1v4h4v-4zm11-9h2v2h-2z"/>
                  <path d="M10 0v6h6V0zm5 1v4h-4V1zM8 1V0h1v2H8v2H7V1zm0 5V4h1v2zM6 8V7h1V6h1v2h1V7h5v1h-4v1H9V8zM0 8h1v1H0zm9 2v1h1v-1zm4 0h1v1h-1zm-3 2v1h1v-1zm2-3h2v1h-2zm0 3h3v1h-3zm4-6V3h1v2zm-9 8h1v-1H8zm4 0h1v1h-1z"/>
                  <path d="M12 9h2V8h-2z"/>
                </svg>
                <h5>Mercado Pago</h5>
                <p>QR Code<br/>Link de pago</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="payment-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-paypal" viewBox="0 0 16 16">
                  <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.35.35 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.203 2.96-.272 1.81-.884 2.637-2.174 3.209-.777.344-1.674.521-2.715.521-.217 0-.432-.008-.642-.025a.613.613 0 0 1-.597-.59l-.575-3.725a.056.056 0 0 0-.055-.05z"/>
                </svg>
                <h5>PayPal</h5>
                <p>Pago internacional<br/>Seguro y confiable</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario de donación */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="donation-form">
                <h3 className="mb-4">Realizar Donación</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="nombre" className="form-label">Nombre completo</label>
                      <input type="text" className="form-control" id="nombre" placeholder="Tu nombre completo" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="tu@email.com" />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="telefono" className="form-label">Teléfono</label>
                      <input type="tel" className="form-control" id="telefono" placeholder="+54 11 1234-5678" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="dni" className="form-label">DNI/CUIT</label>
                      <input type="text" className="form-control" id="dni" placeholder="12.345.678" />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Tipo de donación</label>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="tipoдонacion" id="unica" />
                          <label className="form-check-label" htmlFor="unica">
                            Donación única
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="tipoДонacion" id="mensual" />
                          <label className="form-check-label" htmlFor="mensual">
                            Donación mensual
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Monto de la donación</label>
                    <div className="row">
                      <div className="col-6 col-md-3 mb-2">
                        <button type="button" className="btn btn-outline-light w-100 amount-btn" data-amount="1000">$1.000</button>
                      </div>
                      <div className="col-6 col-md-3 mb-2">
                        <button type="button" className="btn btn-outline-light w-100 amount-btn" data-amount="2500">$2.500</button>
                      </div>
                      <div className="col-6 col-md-3 mb-2">
                        <button type="button" className="btn btn-outline-light w-100 amount-btn" data-amount="5000">$5.000</button>
                      </div>
                      <div className="col-6 col-md-3 mb-2">
                        <button type="button" className="btn btn-outline-light w-100 amount-btn" data-amount="10000">$10.000</button>
                      </div>
                    </div>
                    <div className="mt-3">
                      <input type="number" className="form-control" id="montoPersonalizado" placeholder="Otro monto" min="100" />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="metodoPago" className="form-label">Método de pago</label>
                    <select className="form-select" id="metodoPago">
                      <option value="">Selecciona un método</option>
                      <option value="tarjeta">Tarjeta de crédito/débito</option>
                      <option value="transferencia">Transferencia bancaria</option>
                      <option value="mercadopago">Mercado Pago</option>
                      <option value="paypal">PayPal</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje (opcional)</label>
                    <textarea className="form-control" id="mensaje" rows="3" placeholder="Deja un mensaje sobre tu donación..."></textarea>
                  </div>

                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="anonimo" />
                      <label className="form-check-label" htmlFor="anonimo">
                        Realizar donación anónima
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="terminos" required />
                      <label className="form-check-label" htmlFor="terminos">
                        Acepto los términos y condiciones y la política de privacidad
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart-fill me-2" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                    </svg>
                    Donar Ahora
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donations