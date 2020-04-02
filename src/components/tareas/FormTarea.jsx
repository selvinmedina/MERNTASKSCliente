import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  // Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Obtener la funcion del context de tarea
  const tareasContext = useContext(TareaContext);

  // Extraer funciones y objetos de tarea context
  const {
    tareaSeleccionada,
    errorTarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea
  } = tareasContext;

  // State del formulario
  const [tarea, setTarea] = useState({
    nombre: ""
  });

  // Focus a una tarea
  const focusTarea = () => {
    document.getElementById("nombreTarea").focus();
  };

  const eliminarTareaSeleccionada = () => {
    limpiarTarea();
    focusTarea();
  };

  // Effect que detecta una tarea seleccionada
  useEffect(() => {
    if (tareaSeleccionada !== null) {
      setTarea(tareaSeleccionada);
      focusTarea();
    } else {
      setTarea({
        nombre: ""
      });
    }
  }, [tareaSeleccionada]);

  // Si no hay proyecto seleccionado
  if (!proyecto) return null;

  // Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //Leer los valores del formulario
  const handleChange = e => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value
    });
  };

  // Extraer el nombre del proyecto
  const { nombre } = tarea;

  // Submit
  const onSubmit = e => {
    e.preventDefault();

    // Validar
    if (nombre.trim() === "") {
      validarTarea(true);
      return;
    }

    // Si es edicion o si es nueva tarea
    if (tareaSeleccionada === null) {
      // Tarea nueva

      // Nueva tarea al state de tareas
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      agregarTarea(tarea);
    } else {
      // Actualizar tarea existente
      actualizarTarea(tarea);
      eliminarTareaSeleccionada();
    }

    // Obtener y filtrar las taras del proyecto actual
    obtenerTareas(proyectoActual.id);

    // Reiniciar el form
    setTarea({
      nombre: ""
    });
  };

  return (
    <div className='formulario'>
      <form onSubmit={onSubmit}>
        <div className='contenedor-input'>
          <input
            type='text'
            name='nombre'
            placeholder='Nombre Tarea...'
            id='nombreTarea'
            value={nombre}
            className='input-text'
            onChange={handleChange}
          />
          {tareaSeleccionada ? (
            <i className='cancelar' onClick={eliminarTareaSeleccionada}>
              x
            </i>
          ) : null}
        </div>
        {/* <button className='btn btn-secundario'>x</button> */}

        <div className='contenedor-input'>
          <input
            type='submit'
            value={tareaSeleccionada ? "Editar tarea" : "Agregar Tarea"}
            className='btn btn-primario btn-submit btn-block'
          />
        </div>
      </form>
      {errorTarea ? (
        <p className='mensaje error'>El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
