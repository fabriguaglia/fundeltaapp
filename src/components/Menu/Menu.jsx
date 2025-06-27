import React from 'react'
import videofundelta from './video loop 1.mp4'
import Fotodelta from './fotodelta.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  return (
    <>
      <style jsx>{`
        .hero-image {
          height: 86.5vh;
        }
        
        @media (max-width: 768px) {
          .hero-image {
            height: 50vh;
          }
        }

        .text-custom-green {
          color: rgb(163, 196, 105) !important;
        }
      `}</style>
      
      <main className="images">
        {/* Imagen principal con título */}
        <section className="image-grid container-fluid p-0">
          <div
            className="card text-bg-dark image_cont rounded-0 hero-image"
          >
            <video
              src={videofundelta}
              type="video/mp4"
              alt="Video principal"
              className="w-100 h-100 object-fit-cover"
              style={{ objectFit: 'cover' }}
              autoPlay
              loop
              muted
            />
          </div>
        </section>

        {/* Contenido con Collapse */}
        <section className="container py-5">
          <div className="accordion" id="fundeltaAccordion">
            {/* ¿Quiénes somos? */}
            <div className="accordion-item mb-4">
              <h2 className="accordion-header" id="headingWhoWeAre">
                <button 
                  className="accordion-button" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#collapseWhoWeAre" 
                  aria-expanded="true" 
                  aria-controls="collapseWhoWeAre"
                >
                  ¿Quiénes somos?
                </button>
              </h2>
              <div 
                id="collapseWhoWeAre" 
                className="accordion-collapse collapse show" 
                aria-labelledby="headingWhoWeAre" 
                data-bs-parent="#fundeltaAccordion"
              >
                <div className="accordion-body">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <img 
                        src={Fotodelta} 
                        alt="Universidad Nacional del Delta" 
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="col-md-7">
                      <p>
                        La <strong>Fundación de la Universidad Nacional del Delta</strong> es una organización sin fines de lucro 
                        creada para acompañar el crecimiento y la consolidación de la Universidad Nacional del Delta, 
                        una institución pública y joven, orientada al desarrollo educativo, científico y social de la región.
                      </p>
                      <p>
                        Nuestra misión es tender puentes entre la universidad y la comunidad, generando oportunidades 
                        de financiamiento, cooperación y desarrollo que fortalezcan un proyecto educativo innovador, 
                        inclusivo y de calidad.
                      </p>
                      <p>
                        Somos un equipo convencido del poder transformador de la educación y del valor estratégico de 
                        articular esfuerzos entre el sector público y el privado para construir un futuro con más 
                        oportunidades.
                      </p>
                      <p>
                        Aspiramos a convertirnos en una organización de referencia en el impulso de iniciativas que 
                        promuevan una universidad pública sólida, creativa y profundamente vinculada con las 
                        necesidades de su entorno.
                      </p>
                    </div>
                  </div>

                  {/* FAQ */}
                  <div className="mt-5">
                    <h4 className="text-custom-green"><strong>FAQ</strong></h4>
                    <ol>
                      <li><strong className="text-custom-green">¿Qué es FUNDELTA y cuál es su vínculo con la Universidad Nacional del Delta?</strong><br />
                      FUNDELTA es la Fundación de la Universidad Nacional del Delta. Nació para acompañar, fortalecer y proyectar el crecimiento de esta nueva universidad pública en la región.</li>

                      <li><strong className="text-custom-green">¿Qué tipo de proyectos impulsa la Fundación?</strong><br />
                      Promovemos investigaciones, programas educativos, actividades culturales y propuestas que contribuyan al desarrollo social, científico y ambiental del Delta y de la Región Metropolitana que lo circunda y enmarca.</li>

                      <li><strong className="text-custom-green">¿Cómo puedo colaborar con la Fundación?</strong><br />
                      Podés hacer una donación a través de nuestro sitio web o sumarte como organización aliada. Toda colaboración suma para fortalecer la universidad pública.</li>

                      <li><strong className="text-custom-green">¿Dónde se destinan los fondos recaudados?</strong><br />
                      Cada recurso es gestionado con transparencia y se invierte en proyectos educativos, investigación, becas, actividades comunitarias y fortalecimiento institucional.</li>

                      <li><strong className="text-custom-green">¿Qué relación tiene FUNDELTA con otras organizaciones?</strong><br />
                      Establecemos acuerdos con entidades públicas, privadas y de la sociedad civil para potenciar nuestras propuestas y ampliar el impacto de nuestras acciones.</li>

                      <li><strong className="text-custom-green">¿Quiénes pueden acceder a los datos y los informes publicados?</strong><br />
                      Toda la comunidad. La información es de acceso público y está pensada para investigadores, docentes, estudiantes y ciudadanos interesados en la educación.</li>

                      <li><strong className="text-custom-green">¿Cómo se eligen las propuestas que impulsa la Fundación?</strong><br />
                      Se priorizan aquellas que tienen impacto directo en la comunidad educativa, son innovadoras y se alinean con nuestros ejes estratégicos.</li>

                      <li><strong className="text-custom-green">¿La Fundación entrega becas o apoyos a estudiantes?</strong><br />
                      Sí, uno de nuestros objetivos es acompañar el trayecto educativo de los estudiantes mediante distintas formas de apoyo, según la disponibilidad de recursos.</li>

                      <li><strong className="text-custom-green">¿Puedo presentar una propuesta o proyecto a la Fundación?</strong><br />
                      Sí. Si tenés una iniciativa vinculada a la educación, el desarrollo local o la innovación social, podés escribirnos y evaluaremos la posibilidad de acompañarla.</li>

                      <li><strong className="text-custom-green">¿Cómo puedo mantenerme informado sobre las novedades de la Fundación?</strong><br />
                      Podés seguirnos en nuestras redes sociales y suscribirte a nuestro boletín para recibir noticias, informes y avances de nuestras iniciativas.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div> 
            {/* ¿Qué hacemos? */}
            <div className="accordion-item mb-4">
              <h2 className="accordion-header" id="headingWhatWeDo">
                <button 
                  className="accordion-button collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#collapseWhatWeDo" 
                  aria-expanded="false" 
                  aria-controls="collapseWhatWeDo"
                >
                  ¿Qué hacemos?
                </button>
              </h2>
              <div 
                id="collapseWhatWeDo" 
                className="accordion-collapse collapse" 
                aria-labelledby="headingWhatWeDo" 
                data-bs-parent="#fundeltaAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Desde la Fundación <strong>trabajamos</strong> para <strong>acompañar</strong> y <strong> potenciar </strong> a los 
                    <strong> estudiantes </strong> a través de <strong>diversas</strong> <strong>acciones</strong>:
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="text-custom-green">
                      <strong>Promoción de la investigación científica</strong>
                    </h5>
                    <p>
                      Especialmente en temas vinculados a la <strong>educación </strong>, el <strong> ambiente </strong>, 
                      el <strong>desarrollo</strong> local y la <strong>innovación</strong> social.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="text-custom-green">
                      <strong>Organización de actividades culturales, educativas y de extensión</strong>
                    </h5>
                    <p>
                      Que fortalezcan el <strong>vínculo</strong> entre la <strong>universidad</strong> y 
                       <strong> su </strong> <strong>comunidad</strong>.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="text-custom-green">
                      <strong>Impulso de alianzas estratégicas</strong>
                    </h5>
                    <p>
                      Con organizaciones del sector privado, <strong>público </strong> y la <strong>sociedad </strong> 
                      civil para el <strong>desarrollo</strong> de <strong>proyectos</strong> conjuntos.
                    </p>
                  </div>
                  
                  <p className="mt-4 fw-bold text-custom-green">
                    Nuestro <strong>compromiso</strong> es claro: <strong>contribuir</strong> al <strong>crecimiento</strong> de una 
                    <strong> universidad</strong> <strong>pública</strong> <strong>joven</strong> que necesita del <strong>esfuerzo</strong> colectivo para transformarse 
                    <strong>en una institución referente</strong> del <strong>conocimiento</strong>, la <strong>equidad</strong> y la 
                    <strong>innovación</strong> en la <strong>región</strong> del Delta.
                  </p>

                  <div><h5 className='text-custom-green'><strong>Datos</strong></h5>
                    <p>
                      Ponemos a tu disposición <strong>datos clave</strong> sobre el estado y evolución de la educación en nuestra región. 
                      Nuestro objetivo es proporcionar <strong>información precisa y actualizada</strong> que sirva como herramienta para 
                      <strong> investigadores</strong>, <strong> educadores</strong>, <strong> formuladores de políticas</strong> y miembros de la comunidad 
                      interesados en <strong>comprender y mejorar el sistema educativo</strong>. Creemos que el acceso a 
                      <strong> datos confiables</strong> es fundamental para promover la <strong>transparencia</strong> y fomentar 
                      <strong> iniciativas basadas en evidencia</strong> que contribuyan al <strong>desarrollo educativo</strong> de nuestra sociedad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Menu