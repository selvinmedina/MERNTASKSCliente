import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autentificacion/authContext";

const NuevaCuenta = ({ history }) => {
  // extraer los valores del context
  const alertaContext = useContext(AlertaContext);

  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registrarUsuario } = authContext;

  // En caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
  useEffect(() => {
    if (autenticado) {
      history.push("/proyectos");
    }

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mensaje, autenticado, history]);

  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  // Extraer usuario
  const { nombre, email, password, confirmar } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no hayan campos vacios
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    // Minimo 6 caracteres, y que sean iguales
    if (password.length < 6) {
      mostrarAlerta(
        "La contraseña debe ser de al menos 6 caracteres",
        "alerta-error"
      );
      return;
    }

    // Verificar que los 2 passwords son iguales
    if (password !== confirmar) {
      mostrarAlerta("Las contraseñas no son iguales", "alerta-error");
      return;
    }

    // Pasarlo al action
    registrarUsuario({
      nombre,
      email,
      password,
    });
  };

  return (
    <div className='form-usuario'>
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
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
