import React from 'react';
import './Acuerdos.css';

function Acuerdos() {
  const noticias = [
    {
      titulo: 'Acuerdo con Ministerio de Educación',
      fecha: 'Julio 2025',
      resumen: 'Firmamos un convenio con el Ministerio para desarrollar programas de capacitación docente en zonas rurales.',
      enlace: '#'
    },
    {
      titulo: 'Alianza con ONG EducaPlus',
      fecha: 'Mayo 2025',
      resumen: 'Iniciamos un proyecto conjunto de tutorías escolares gratuitas para estudiantes de secundaria.',
      enlace: '#'
    },
    {
      titulo: 'Convenio Universidad–Fundelta',
      fecha: 'Marzo 2025',
      resumen: 'Lanzamos un posgrado en Innovación Educativa en colaboración con la Universidad del Delta.',
      enlace: '#'
    }
  ];

  return (
    <div className="acuerdos-container">
      <div className="acuerdos-content">
        <h1>Acuerdos</h1>
        <p className="acuerdos-text">
          Creemos que el trabajo en red es clave para generar un impacto real.  
          Por eso, construimos alianzas con instituciones del ámbito público, privado y de la sociedad civil que comparten nuestro compromiso con la educación.  
          En esta sección encontrarás noticias y actualizaciones sobre los acuerdos que nos permiten potenciar nuestras propuestas y ampliar nuestro alcance.
        </p>

        <div className="acuerdos-list">
          {noticias.map((n, i) => (
            <div key={i} className="acuerdo-item">
              <h3>{n.titulo}</h3>
              <span className="acuerdo-fecha">{n.fecha}</span>
              <p className="acuerdo-resumen">{n.resumen}</p>
              <a href={n.enlace} className="acuerdo-btn">Leer más</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Acuerdos;
