import React, { useEffect, useState } from 'react'
import './Donar.css'

function Donations() {
  const [paymentData, setPaymentData] = useState({
    amount: 1000,
    firstName: '',
    lastName: '',
    email: ''
  });
  
  const [paymentBrickController, setPaymentBrickController] = useState(null);

  useEffect(() => {
    // Cargar el script de Mercado Pago si no está cargado
    if (!window.MercadoPago) {
      const script = document.createElement('script');
      script.src = 'https://sdk.mercadopago.com/js/v2';
      script.onload = initializeMercadoPago;
      document.head.appendChild(script);
    } else {
      initializeMercadoPago();
    }

    return () => {
      // Cleanup: destruir el brick al desmontar el componente
      if (paymentBrickController) {
        paymentBrickController.unmount();
      }
    };
  }, []);

  const initializeMercadoPago = () => {
    const mp = new window.MercadoPago('YOUR_PUBLIC_KEY', {
      locale: 'es'
    });
    
    const bricksBuilder = mp.bricks();
    renderPaymentBrick(bricksBuilder);
  };

  const renderPaymentBrick = async (bricksBuilder) => {
    // Limpiar contenedor antes de renderizar
    const container = document.getElementById('paymentBrick_container');
    if (container) {
      container.innerHTML = '';
    }

    const settings = {
      initialization: {
        amount: paymentData.amount,
        preferenceId: "<PREFERENCE_ID>", // Reemplazar con el ID real de preferencia
        payer: {
          firstName: paymentData.firstName,
          lastName: paymentData.lastName,
          email: paymentData.email,
        },
      },
      customization: {
        visual: {
          style: {
            theme: "dark",
          },
        },
        paymentMethods: {
          creditCard: "all",
          debitCard: "all",
          ticket: "all",
          bankTransfer: "all",
          atm: "all",
          onboarding_credits: "all",
          wallet_purchase: "all",
          maxInstallments: 1
        },
      },
      callbacks: {
        onReady: () => {
          console.log('Payment Brick está listo');
        },
        onSubmit: ({ selectedPaymentMethod, formData }) => {
          return new Promise((resolve, reject) => {
            fetch("/process_payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            })
              .then((response) => response.json())
              .then((response) => {
                console.log('Pago procesado:', response);
                resolve();
              })
              .catch((error) => {
                console.error('Error al procesar el pago:', error);
                reject();
              });
          });
        },
        onError: (error) => {
          console.error('Error en Payment Brick:', error);
        },
      },
    };

    try {
      const controller = await bricksBuilder.create(
        "payment",
        "paymentBrick_container",
        settings
      );
      setPaymentBrickController(controller);
    } catch (error) {
      console.error('Error al crear Payment Brick:', error);
    }
  };

  const handleAmountSelect = (amount) => {
    setPaymentData(prev => ({ ...prev, amount }));
    // Reinicializar el brick con el nuevo monto solo si está inicializado
    if (paymentBrickController) {
      paymentBrickController.unmount();
      setTimeout(() => initializeMercadoPago(), 300);
    }
  };

  const handleCustomAmount = (e) => {
    const amount = parseInt(e.target.value) || 0;
    if (amount >= 500) {
      setPaymentData(prev => ({ ...prev, amount }));
      // Reinicializar el brick después de un tiempo para evitar múltiples actualizaciones
      if (paymentBrickController) {
        clearTimeout(window.customAmountTimeout);
        window.customAmountTimeout = setTimeout(() => {
          paymentBrickController.unmount();
          setTimeout(() => initializeMercadoPago(), 300);
        }, 1000);
      }
    }
  };

  const handlePayerDataChange = (field, value) => {
    setPaymentData(prev => ({ ...prev, [field]: value }));
    // Reinicializar el brick con los nuevos datos del pagador
    if (paymentBrickController && (field === 'firstName' || field === 'lastName' || field === 'email')) {
      setTimeout(() => {
        paymentBrickController.unmount();
        setTimeout(() => initializeMercadoPago(), 100);
      }, 500);
    }
  };

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
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                </svg>
                <h5>Tarjeta de Crédito</h5>
                <p>Visa, Mastercard<br/>American Express</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="payment-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
                  <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
                </svg>
                <h5>Transferencia</h5>
                <p>Bancaria<br/>CBU disponible</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="payment-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-qr-code" viewBox="0 0 16 16">
                  <path d="M2 2h2v2H2z"/>
                  <path d="M6 0v6H0V0zM5 1H1v4h4zM4 12H2v2h2z"/>
                  <path d="M6 10v6H0v-6zm-5 1v4h4v-4zm11-9h2v2h-2z"/>
                  <path d="M10 0v6h6V0zm5 1v4h-4V1zM8 1V0h1v2H8v2H7V1zm0 5V4h1v2zM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8zm0 0v1H2V8H1v1H0V7h3v1zm10 1h-1V7h1zm-1 0h-1v2h2v-1h-1zm-4 0h2v1h-1v1h-1zm2 3v-1h-1v1h-1v1H9v1h3v-2zm0 0h3v1h-2v1h-1zm-4-1v1h1v-2H7v1z"/>
                  <path d="M7 12h1v3h4v1H7zm9 2v2h-3v-1h2v-1z"/>
                </svg>
                <h5>Mercado Pago</h5>
                <p>QR Code<br/>Link de pago</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="payment-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-paypal" viewBox="0 0 16 16">
                  <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.35.35 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91q.57-.403.993-1.005a4.94 4.94 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.7 2.7 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.7.7 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016q.326.186.548.438c.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.87.87 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.35.35 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32z"/>
                </svg>
                <h5>PayPal</h5>
                <p>Pago internacional<br/>Seguro y confiable</p>
              </div>
            </div>
          </div>
        </div>

        {/* Configuración de donación y Payment Brick */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="donation-form">
                <h3 className="mb-4">Realizar Donación</h3>
                
                {/* Configuración básica del donante */}
                <div className="row mb-4">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="firstName" className="form-label">Nombre</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="firstName" 
                      placeholder="Tu nombre"
                      value={paymentData.firstName}
                      onChange={(e) => handlePayerDataChange('firstName', e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="lastName" className="form-label">Apellido</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="lastName" 
                      placeholder="Tu apellido"
                      value={paymentData.lastName}
                      onChange={(e) => handlePayerDataChange('lastName', e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      placeholder="tu@email.com"
                      value={paymentData.email}
                      onChange={(e) => handlePayerDataChange('email', e.target.value)}
                    />
                  </div>
                </div>

                {/* Selección de monto */}
                <div className="mb-4">
                  <label className="form-label">Monto de la donación</label>
                  <div className="row">
                    <div className="col-6 col-md-3 mb-2">
                      <button 
                        type="button" 
                        className={`btn w-100 amount-btn ${paymentData.amount === 500 ? 'btn-success' : 'btn-outline-light'}`}
                        onClick={() => handleAmountSelect(500)}
                        style={{ 
                          backgroundColor: paymentData.amount === 500 ? '#69932D' : '',
                          borderColor: paymentData.amount === 500 ? '#69932D' : '',
                          color: paymentData.amount === 500 ? 'white' : ''
                        }}
                      >
                        $500
                      </button>
                    </div>
                    <div className="col-6 col-md-3 mb-2">
                      <button 
                        type="button" 
                        className={`btn w-100 amount-btn ${paymentData.amount === 1000 ? 'btn-success' : 'btn-outline-light'}`}
                        onClick={() => handleAmountSelect(1000)}
                        style={{ 
                          backgroundColor: paymentData.amount === 1000 ? '#69932D' : '',
                          borderColor: paymentData.amount === 1000 ? '#69932D' : '',
                          color: paymentData.amount === 1000 ? 'white' : ''
                        }}
                      >
                        $1.000
                      </button>
                    </div>
                    <div className="col-6 col-md-3 mb-2">
                      <button 
                        type="button" 
                        className={`btn w-100 amount-btn ${paymentData.amount === 2500 ? 'btn-success' : 'btn-outline-light'}`}
                        onClick={() => handleAmountSelect(2500)}
                        style={{ 
                          backgroundColor: paymentData.amount === 2500 ? '#69932D' : '',
                          borderColor: paymentData.amount === 2500 ? '#69932D' : '',
                          color: paymentData.amount === 2500 ? 'white' : ''
                        }}
                      >
                        $2.500
                      </button>
                    </div>
                    <div className="col-6 col-md-3 mb-2">
                      <button 
                        type="button" 
                        className={`btn w-100 amount-btn ${paymentData.amount === 5000 ? 'btn-success' : 'btn-outline-light'}`}
                        onClick={() => handleAmountSelect(5000)}
                        style={{ 
                          backgroundColor: paymentData.amount === 5000 ? '#69932D' : '',
                          borderColor: paymentData.amount === 5000 ? '#69932D' : '',
                          color: paymentData.amount === 5000 ? 'white' : ''
                        }}
                      >
                        $5.000
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <input 
                      type="number" 
                      className="form-control" 
                      id="montoPersonalizado" 
                      placeholder="Otro monto" 
                      min="500"
                      onChange={handleCustomAmount}
                    />
                  </div>
                  <small className="">Monto actual: ${paymentData.amount.toLocaleString('es-AR')}</small>
                </div>

                {/* Contenedor del Payment Brick */}
                <div className="mb-4">
                  <h4 className="mb-3">Método de Pago</h4>
                  <div id="paymentBrick_container" style={{ minHeight: '400px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donations