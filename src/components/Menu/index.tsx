import React, { useState, useCallback, useEffect } from 'react';
import './style.css';

const Menu: React.FC = () => {
  const [show, setShow] = useState(false);

  const hendleMenu = useCallback(() => {
    setShow(true);
    const menuSection = document.querySelector('.menu-section');
    const menuToggle = menuSection?.querySelector('.menu-toggle');

    menuToggle?.addEventListener('click', () => {
      document.body.style.overflow = show ? 'hidden' : 'initial';
      menuSection?.classList.toggle('on', show);
      setShow((prevState) => !prevState);
    });
  }, [show]);

  useEffect(() => {
    window.onscroll = () => {
      document.body.style.overflow = 'initial';
      const menuSection = document.querySelector('.menu-section');
      menuSection?.classList.remove('on');
    };
  }, []);

  return (
    <div className="menu" onClick={hendleMenu}>
      <div className="menu-section">
        <div className="menu-toggle">
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </div>
        <nav>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="#main-subscription">O concurso</a></li>
            <li><a href="#main-about">Sobre</a></li>
            <li><a href="#main-rules">Regras</a></li>
            <li><a href="#main-register">Inscrição</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
