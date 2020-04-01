import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [usuario, setUsuario] = useState({
    email: "",
    password: ""
  });

  // Extraer usuario
  const { email, password } = usuario;

  const onChange = e => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='form-usuario'>
      <div className='contenedor-form sombra-dark'>
        <h1>Iniciar Sesión</h1>
        <form action='' onSubmit={onSubmit}>
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
              placeholder='Tu Contraseña'
              onChange={onChange}
              value={password}
            />
          </div>

          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Iniciar Sesión'
            />
          </div>
        </form>
        <Link to='/nueva-cuenta' className='enlace-cuenta'>
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
