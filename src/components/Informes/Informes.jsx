import React, { useState } from 'react';
import './Informes.css';

function Informes() {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // lógica de búsqueda de informes
    console.log('Buscando informes para:', query);
  };

  const dummyReports = [
    { title: 'Informe Anual 2024', date: 'Junio 2025', link: '#' },
    { title: 'Análisis de Cobertura Educativa', date: 'Marzo 2025', link: '#' },
    { title: 'Tendencias Pedagógicas', date: 'Diciembre 2024', link: '#' },
  ];

  const filtered = dummyReports.filter(r =>
    r.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="informes-container">
      <div className="informes-content">
        <h1>Informes</h1>
        <p className="intro">
          En esta sección, podrás encontrar los informes elaborados por la
          Fundación. Estos documentos ofrecen análisis y datos sobre diversos
          aspectos de la educación en nuestra región, con el objetivo de informar
          y enriquecer el debate público.
        </p>

        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="form-control search-input"
            placeholder="Buscar informes..."
            value={query}
            onChange={handleSearchChange}
          />
          <button type="submit" className="btn btn-primary search-button">
            Buscar
          </button>
        </form>

        <div className="informes-list container mt-4">
          <div className="row">
            {filtered.map((rep, idx) => (
              <div key={idx} className="col-md-4 col-sm-6 mb-4">
                <div className="informe-item">
                  <h5>{rep.title}</h5>
                  <p className="date">{rep.date}</p>
                  <a href={rep.link} className="btn btn-outline-light btn-sm">
                    Descargar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informes;