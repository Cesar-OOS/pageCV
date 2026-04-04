// src/components/MainBody.jsx
import './MainBody.css';

function MainBody() {
  return (
    <main className="main-content">
      
      {/* Título Principal con salto de línea */}
      <h1 className="main-title">
        Cesar Ortega<br />Sitio Web Personal
      </h1>

      {/* Subtítulo */}
      <h2 className="main-subtitle">
        Estudiante con un gran enfoque en ciencia de datos y desarrollo de software
      </h2>

      {/* Contenedor Blanco */}
      <div className="info-container">
        
        {/* Subtítulo 2 */}
        <h3 className="container-subtitle">Información General</h3>

        {/* Texto General */}
        <p className="general-text">
          Aquí irá mi descripción personal
        </p>

        {/* Línea Divisora */}
        <div className="divider-line"></div>

      </div>

    </main>
  );
}

export default MainBody;