import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: ""
  });

  // Extraer usuario
  const { nombre, email, password, confirmar } = usuario;

  const onChange = e => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    // Validar que no hayan campos vacios

    // Minimo 6 caracteres, y que sean iguales

    // Enviar al backend
  };

  return (
    <div className='form-usuario'>
      <div className='contenedor-form sombra-dark'>
        <h1>Obtener nueva cuenta</h1>
        <form action='' onSubmit={onSubmit}>
          <div className='campo-form'>
            <label htmlFor='nombre'>Nombre</label>
            <input
              type='text'
              id='nombre'
              name='nombre'
              placeholder='Tu nombre'
              value={nombre}
              onChange={onChange}
            />
          </div>
          <div className='campo-form'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Tu email'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className='campo-form'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Tu contraseña'
              onChange={onChange}
              value={password}
            />
          </div>
          <div className='campo-form'>
            <label htmlFor='password'>Confirmar</label>
            <input
              type='password'
              id='confirmar'
              placeholder='Conformar tu contraseña'
              name='confirmar'
              onChange={onChange}
              value={confirmar}
            />
          </div>

          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Registrarme'
            />
          </div>
        </form>
        <Link to='/' className='enlace-cuenta'>
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
