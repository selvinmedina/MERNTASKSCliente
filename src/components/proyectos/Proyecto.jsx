import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  // Obtener el state del proyecto
  const proyectosContext = useContext(proyectoContext);

  // Extraer funciones y objetos del context
  const { proyectoActual } = proyectosContext;

  // Obtener la funcion del context de tarea
  const tareasContext = useContext(TareaContext);

  // Extraer funciones y objetos de tarea context
  const { obtenerTareas } = tareasContext;

  // Funcion para agregar el proyecto actual
  const seleccionarProyecto = (id) => {
    proyectoActual(proyecto.id); // Fijar un proyecto actual
    obtenerTareas(id); // Filtrar las tareas cuando se de click
  };

  return (
    <li>
      <button
        type='button'
        className='btn btn-blank'
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
