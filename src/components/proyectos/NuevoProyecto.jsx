import React, { Fragment, useState, useContext, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  // Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);

  // Extraer funciones y objetos del context
  const {
    proyectoEditar, // Contiene el proyecto a editiar
    formulario,
    errorformulario,
    agregarProyecto,
    mostrarFormulario,
    mostrarError,
    editarProyecto, // Funcion para editar un proyecto
  } = proyectosContext;

  // State para proyecto
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  // Extraer nombre del proyecto
  const { nombre } = proyecto;

  // Lee los contenidos del input
  const onChangeProyecto = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (proyectoEditar) {
      setProyecto({
        nombre: proyectoEditar.nombre,
      });
    }
  }, [proyectoEditar]);

  // Cuando el usuario envia un proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    // Validar el proyecto
    if (nombre.trim() === "") {
      mostrarError();
      return;
    }

    // Agregarlo al state
    //agregar o editar
    if (proyectoEditar) {
      editarProyecto(proyectoEditar._id, proyecto);
    } else {
      agregarProyecto(proyecto);
      // Reiniciar el form
      setProyecto({
        nombre: "",
      });
    }
  };

  const onClickNuevoProyecto = async () => {
    await mostrarFormulario();
  };

  return (
    <Fragment>
      <button
        className='btn btn-block btn-primario'
        onClick={onClickNuevoProyecto} // Mostrar el formulario
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
            autoFocus // Focus automaticamente
            id='nombreProyecto'
            name='nombre'
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type='submit'
            value={proyectoEditar ? "Editar Proyecto" : "Agregar Proyecto"}
            className='btn btn-primario btn-block'
          />
        </form>
      ) : null}
      {errorformulario ? (
        <p className='mensaje error'>El nombre del Proyecto es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
