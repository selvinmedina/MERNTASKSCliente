import React from "react";

const Barra = () => {
  return (
    <header className='app-header'>
      <p className='nombre-usuario'>
        Hola, <span>Selvin Medina</span>
      </p>
      <nav className='nav-principal'>
        <a href='#!'>Cerrar Sesión</a>
      </nav>
    </header>
  );
};

export default Barra;
