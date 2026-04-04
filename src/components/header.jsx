// src/components/Header.jsx
import './Header.css';

// NOTA IMPORTANTE: Debes colocar tus archivos .png en la carpeta /public
// Por ejemplo: /public/logo-co.png, /public/icon-sun.png, etc.
const logoUrl = '../assets/img/logo_co.png'; // Reemplaza con tu nombre de archivo real
const sunIconUrl = '../assets/img/icon_sun.png'; // Reemplaza con tu nombre de archivo real
const moonIconUrl = '../assets/img/icon_moon.png'; // Reemplaza con tu nombre de archivo real

function Header() {
  return (
    <header className="fixed-header">
      <div className="header-content">
        
        {/* Lado Izquierdo: Slider Idiomas */}
        <div className="language-slider-container">
          <span className="slider-text text-esp">Esp</span>
          {/* Slider visual (desactivado/lado izquierdo por defecto) */}
          <div className="slider-visual desactivado">
            <div className="slider-circle"></div>
          </div>
          <span className="slider-text text-eng">Eng</span>
        </div>

        {/* Centro: Logotipo CO */}
        <div className="logo-container">
          <img src={logoUrl} alt="Logo CO" className="logo-co" />
        </div>

        {/* Lado Derecho: Slider Tonos */}
        <div className="theme-slider-container">
          <img src={sunIconUrl} alt="Modo Claro" className="theme-icon icon-sun" />
          {/* Slider visual (desactivado/lado izquierdo por defecto) */}
          <div className="slider-visual desactivado">
            <div className="slider-circle"></div>
          </div>
          <img src={moonIconUrl} alt="Modo Oscuro" className="theme-icon icon-moon" />
        </div>

      </div>
    </header>
  );
}

export default Header;