import React from 'react'
import videofundelta from './video loop 1.mp4'
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

        {/* Contenido adicional */}
        <section className="container py-5">
          {[
            {
              src: "https://undelta.edu.ar/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-06-at-16.11.45.jpeg",
              title: "Transformando vidas a través de la educación superior",
              text: "Fundelta nace como el brazo operativo de la Universidad Nacional del Delta, con el compromiso de democratizar el acceso a la educación superior y promover el desarrollo integral de nuestra región. Trabajamos incansablemente para crear oportunidades educativas que transformen no solo la vida de nuestros estudiantes, sino también el tejido social y económico del Delta del Paraná. Nuestra misión trasciende las aulas: somos agentes de cambio que creemos en el poder transformador del conocimiento para construir una sociedad más justa, inclusiva y próspera.",
              reverse: false,
            },
            {
              src: "https://i0.wp.com/denorteanorte.com/wp-content/uploads/2025/04/UNDELTA-INTERNA-TAPA.jpg?fit=816%2C504&ssl=1",
              title: "Impulsando el conocimiento científico y tecnológico del Delta",
              text: "En Fundelta entendemos que la investigación es el motor del progreso. Desarrollamos y financiamos proyectos de investigación aplicada que abordan los desafíos específicos de nuestra región deltaica, desde la conservación de humedales hasta el desarrollo de tecnologías sustentables. Nuestros investigadores trabajan en estrecha colaboración con la comunidad para generar conocimiento que se traduzca en soluciones concretas. Fomentamos la innovación mediante incubadoras de proyectos, laboratorios de ideas y espacios de emprendimiento académico que conectan la excelencia científica con el impacto social y económico real.",
              reverse: true,
            },
            {
              src: "https://www.elcomercioonline.com.ar/imagenes/051838.jpg",
              title: "Conectando la universidad con la comunidad",
              text: "La extensión universitaria es nuestro puente hacia la sociedad. A través de programas educativos, talleres comunitarios, actividades culturales y proyectos de desarrollo social, llevamos el conocimiento universitario directamente a donde más se necesita. Trabajamos con municipios, organizaciones sociales y cooperativas para diseñar iniciativas que respondan a las necesidades específicas de cada comunidad del Delta. Nuestros programas abarcan desde alfabetización digital hasta capacitación en oficios, desde promoción de la salud hasta preservación del patrimonio cultural, siempre con el objetivo de fortalecer el tejido social y generar oportunidades de crecimiento local.",
              reverse: false,
            },
            {
              src: "https://undelta.edu.ar/wp-content/uploads/2024/12/undelta-1024x577.webp",
              title: "Formando los líderes del futuro",
              text: "Creemos firmemente que el talento no debe verse limitado por las circunstancias económicas. Por eso, desarrollamos un robusto sistema de becas y programas de apoyo estudiantil que garantiza que ningún joven con potencial se quede sin acceso a la educación superior. Nuestro apoyo va más allá del financiamiento: ofrecemos tutorías académicas, acompañamiento psicopedagógico, programas de inserción laboral y redes de mentoreo que acompañan a nuestros estudiantes desde el ingreso hasta su graduación y primeros pasos profesionales. Cada beca que otorgamos es una inversión en el futuro de nuestra región.",
              reverse: true,
            },
            {
              src: "https://pbs.twimg.com/media/F6cPPiPXEAAvL5-?format=jpg&name=large",
              title: "Construyendo redes de colaboración",
              text: "El desarrollo regional requiere del trabajo conjunto de múltiples actores. Fundelta teje redes de colaboración con instituciones públicas nacionales e internacionales, empresas comprometidas con la responsabilidad social, organizaciones no gubernamentales y organismos multilaterales. Estas alianzas estratégicas nos permiten amplificar el impacto de nuestras iniciativas, acceder a recursos adicionales y compartir mejores prácticas. Participamos activamente en consorcios académicos, redes de investigación y plataformas de cooperación que posicionan a la Universidad Nacional del Delta como un referente en educación superior y desarrollo territorial sostenible.",
              reverse: false,
            },
          ].map(({ src, title, text, reverse }, i) => (
             <>
             <div className={`row align-items-center ${reverse ? "flex-md-row-reverse" : ""} `} key={i}>
              <div className="col-12 col-md-4 mb-3 mb-md-0">
                <div className="ratio ratio-1x1">
                  <img
                    src={src}
                    alt={title}
                    className="img-fluid object-fit-cover rounded"
                  />
                </div>
              </div>
              <div className="col-12 col-md-8">
                <h3 className="fonttext">{title}</h3>
                <p>{text}</p>
              </div>
            </div>
            <hr />
            </>
          ))}
        </section>
      </main>
      </>
  )
}

export default Menu