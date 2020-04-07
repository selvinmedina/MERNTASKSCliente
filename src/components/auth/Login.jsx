import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/autentificacion/authContext";
import AlertaContext from "../../context/alertas/alertaContext";

const Login = ({ history }) => {
  // extraer los valores del context
  const alertaContext = useContext(AlertaContext);

  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  // Extraer usuario
  const { email, password } = usuario;

  // en caso de qeu el password o el usuario no exista
  useEffect(() => {
    if (autenticado) {
      history.push("/proyectos");
    }

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mensaje, autenticado, history]);

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // validar que no hallan campos vacios
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    // Pasarlo al action
    iniciarSesion({ email, password });
  };

  return (
    <div className='form-usuario'>
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
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
