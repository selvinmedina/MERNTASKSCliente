import React, { useContext } from "react";
import TareaContext from "../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
  // Obtener la funcion del context de tarea
  const tareasContext = useContext(TareaContext);

  // Extraer funciones y objetos de tarea context
  const { eliminarTarea, obtenerTareas } = tareasContext;

  // Eliminar una tarea
  const tareaEliminar = id => {
    eliminarTarea(id);
    obtenerTareas(tarea.proyectoId);
  };

  return (
    <li className='tarea sombra' key={tarea.id}>
      <p>{tarea.nombre}</p>
      <div className='estado'>
        {tarea.estado ? (
          <button type='button' className='completo'>
            Completo
          </button>
        ) : (
          <button type='button' className='incompleto'>
            Incompleto
          </button>
        )}
      </div>
      <div className='acciones'>
        <button type='button' className='btn btn-primario'>
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
