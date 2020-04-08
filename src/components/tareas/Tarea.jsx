import React, { useContext, useState } from "react";
import TareaContext from "../../context/tareas/tareaContext";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Tarea = ({ tarea }) => {
  // Obtener la funcion del context de tarea
  const tareasContext = useContext(TareaContext);

  // conext del proyecto
  const proyectosContext = useContext(proyectoContext);
  const [procesando, setProcesando] = useState(false);

  // Extraer funciones y objetos de tarea context
  const {
    eliminarTarea,
    obtenerTareas,
    guardarTareaActual,
    actualizarTarea,
  } = tareasContext;
  const { proyecto } = proyectosContext;
  const [proyectoActual] = proyecto;

  // Eliminar una tarea
  const tareaEliminar = async (id) => {
    setProcesando(true);
    await eliminarTarea(id, proyectoActual._id);
    await obtenerTareas(proyectoActual._id);
    setTimeout(() => {
      setProcesando(false);
    }, 500);
  };

  // Modificar el estado de las tareas
  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    actualizarTarea(tarea);
  };

  // Agregar una tarea actual cuando el usuario desea editarla
  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea);
  };

  return (
    <li className='tarea sombra' key={tarea._id}>
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
          disabled={procesando}
          onClick={() => tareaEliminar(tarea._id)}
          className='btn btn-secundario'
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
