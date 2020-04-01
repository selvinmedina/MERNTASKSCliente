import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {
  // State para proyecto
  const [proyecto, setProyecto] = useState({
    nombre: ""
  });

  // Extraer nombre del proyecto
  const { nombre } = proyecto;

  // Lee los contenidos del input
  const onChangeProyecto = e => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    });
  };

  // Cuando el usuario envia un proyecto
  const onSubmitProyecto = e => {
    e.preventDefault();

    // Validar el proyecto

    // Agregarlo al state

    // Reiniciar el form
  };

  return (
    <Fragment>
      <button className='btn btn-block btn-primario'>Nuevo Proyecto</button>
      <form
        action=''
        className='formulario-nuevo-proyecto'
        onSubmit={onSubmitProyecto}
      >
        <input
          type='text'
          className='input-text'
          placeholder='Nombre Proyecto'
          name='nombre'
          value={nombre}
          onChange={onChangeProyecto}
        />
        <input
          type='submit'
          value='Agregar Proyecto'
          className='btn btn-primario btn-block'
        />
      </form>
    </Fragment>
  );
};

export default NuevoProyecto;
