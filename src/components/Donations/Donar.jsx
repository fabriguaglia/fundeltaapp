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
                <svg
                  id="mpitem"
                  width="64px"
                  height="64px"
                  viewBox="0 0 48.00 48.00"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#659b56"
                  stroke="#659b56"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#C659b56"
                    strokeWidth="1.7280000000000002"
                  >
                    <defs>
                      <style>{`.a{fill:none;stroke:#659b56;stroke-linecap:round;stroke-linejoin:round;}`}</style>
                    </defs>
                    <ellipse className="a" cx="24" cy="24" rx="19.5" ry="12.978" />
                    <path
                      className="a"
                      d="M9.7044,15.5305A20.8345,20.8345,0,0,0,16.09,17.3957a22.8207,22.8207,0,0,0,4.546-.7731"
                    />
                    <path
                      className="a"
                      d="M38.8824,15.6143a8.6157,8.6157,0,0,1-5.1653,1.4849c-3.3351,0-6.2255-2.1987-9.2148-2.1987-2.6681,0-7.189,4.3727-7.189,5.1633s1.3094,1.26,2.3717.7411c.6215-.3036,3.31-2.9151,5.4843-2.9151s9.2186,7.1361,9.8571,7.8066c.9882,1.0376-.9264,3.2733-2.1493,2.05s-3.4092-3.1621-3.4092-3.1621"
                    />
                    <path className="a" d="M43.4,22.6826a23.9981,23.9981,0,0,0-8.5467,2.6926" />
                    <path
                      className="a"
                      d="M32.5807,27.4555c.9881,1.0376-.9265,3.2733-2.1493,2.05S27.85,26.9933,27.85,26.9933"
                    />
                    <path
                      className="a"
                      d="M30.1349,29.2147c.9882,1.0376-.9264,3.2733-2.1493,2.05S25.96,29.3032,25.96,29.3032"
                    />
                    <path className="a" d="M24.2015,31.3156A2.309,2.309,0,0,0,27.85,31.13" />
                    <path
                      className="a"
                      d="M24.2015,31.3156c.5306-.6964.49-3.1817-2.2437-2.6876.6423-1.2188.0658-3.1457-2.3881-2.0093A1.69,1.69,0,0,0,16.424,25.96a1.4545,1.4545,0,0,0-2.8-.28c-.5435,1.1035.2964,3.0963,2.0916,1.9763-.1812,1.9435.84,2.5364,2.6845,1.7788.0989,1.91,1.367,1.7457,2.2728,1.3011A1.9376,1.9376,0,0,0,24.2015,31.3156Z"
                    />
                    <path
                      className="a"
                      d="M4.6706,22.2785a18.3081,18.3081,0,0,1,9.0635,3.2144"
                    />
                  </g>
                  <g id="SVGRepo_iconCarrier">
                    <defs>
                      <style>{`.a{fill:none;stroke:#659b56;stroke-linecap:round;stroke-linejoin:round;}`}</style>
                    </defs>
                    <ellipse className="a" cx="24" cy="24" rx="19.5" ry="12.978" />
                    <path
                      className="a"
                      d="M9.7044,15.5305A20.8345,20.8345,0,0,0,16.09,17.3957a22.8207,22.8207,0,0,0,4.546-.7731"
                    />
                    <path
                      className="a"
                      d="M38.8824,15.6143a8.6157,8.6157,0,0,1-5.1653,1.4849c-3.3351,0-6.2255-2.1987-9.2148-2.1987-2.6681,0-7.189,4.3727-7.189,5.1633s1.3094,1.26,2.3717.7411c.6215-.3036,3.31-2.9151,5.4843-2.9151s9.2186,7.1361,9.8571,7.8066c.9882,1.0376-.9264,3.2733-2.1493,2.05s-3.4092-3.1621-3.4092-3.1621"
                    />
                    <path className="a" d="M43.4,22.6826a23.9981,23.9981,0,0,0-8.5467,2.6926" />
                    <path
                      className="a"
                      d="M32.5807,27.4555c.9881,1.0376-.9265,3.2733-2.1493,2.05S27.85,26.9933,27.85,26.9933"
                    />
                    <path
                      className="a"
                      d="M30.1349,29.2147c.9882,1.0376-.9264,3.2733-2.1493,2.05S25.96,29.3032,25.96,29.3032"
                    />
                    <path className="a" d="M24.2015,31.3156A2.309,2.309,0,0,0,27.85,31.13" />
                    <path
                      className="a"
                      d="M24.2015,31.3156c.5306-.6964.49-3.1817-2.2437-2.6876.6423-1.2188.0658-3.1457-2.3881-2.0093A1.69,1.69,0,0,0,16.424,25.96a1.4545,1.4545,0,0,0-2.8-.28c-.5435,1.1035.2964,3.0963,2.0916,1.9763-.1812,1.9435.84,2.5364,2.6845,1.7788.0989,1.91,1.367,1.7457,2.2728,1.3011A1.9376,1.9376,0,0,0,24.2015,31.3156Z"
                    />
                    <path
                      className="a"
                      d="M4.6706,22.2785a18.3081,18.3081,0,0,1,9.0635,3.2144"
                    />
                  </g>
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