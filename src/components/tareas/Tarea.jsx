import React, { useContext } from "react";
import TareaContext from "../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
  // Obtener la funcion del context de tarea
  const tareasContext = useContext(TareaContext);

  // Extraer funciones y objetos de tarea context
  const {
    eliminarTarea,
    obtenerTareas,
    cambiarEstadoTarea,
    guardarTareaActual
  } = tareasContext;

  // Eliminar una tarea
  const tareaEliminar = id => {
    eliminarTarea(id);
    obtenerTareas(tarea.proyectoId);
  };

  // Modificar el estado de las tareas
  const cambiarEstado = tarea => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    cambiarEstadoTarea(tarea);
  };

  // Agregar una tarea actual cuando el usuario desea editarla
  const seleccionarTarea = tarea => {
    guardarTareaActual(tarea);
  };

  return (
    <li className='tarea sombra' key={tarea.id}>
      <p>{tarea.nombre}</p>
      <div className='estado'>
        {tarea.estado ? (
          <button
            type='button'
            onClick={() => cambiarEstado(tarea)}
            className='completo'
          >
            Completo
          </button>
        ) : (
          <button
            type='button'
            onClick={() => cambiarEstado(tarea)}
            className='incompleto'
          >
            Incompleto
          </button>
        )}
      </div>
      <div className='acciones'>
        <button
          type='button'
          onClick={() => seleccionarTarea(tarea)}
          className='btn btn-primario'
        >
          Editar
        </button>
        <button
          type='button'
          onClick={() => tareaEliminar(tarea.id)}
          className='btn btn-secundario'
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
