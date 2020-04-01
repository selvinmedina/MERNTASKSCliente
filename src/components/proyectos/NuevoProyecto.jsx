import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  // Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, mostrarFormulario } = proyectosContext;

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
      <button
        className='btn btn-block btn-primario'
        onClick={mostrarFormulario} // Mostrar el formulario
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
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
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;