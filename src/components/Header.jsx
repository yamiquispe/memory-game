import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ImgLogo from '../img/logoGame.png';


const Header = ({ hide }) => {
  if (hide) {
    return (
      <header role="banner" className="Header">
        <Link to="/">
          <img src={ImgLogo} alt="Logo de juego Memory Game" />
        </Link>
        <Link to="/gamecards">
          <button type="button" className="btn">Volver al juego</button>
        </Link>
      </header>
    );
  }

  return (
    <header role="banner" className="Header">
      <Link to="/">
        <img src={ImgLogo} alt="Logo de juego Memory Game" />
      </Link>
      <Link to="/gamerules">
        <button type="button" className="btn">Reglas del juego</button>
      </Link>
    </header>
  );
};


Header.propTypes = {
  hide: PropTypes.bool.isRequired,
};


export default Header;
