import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";
import imagen from "../../assets/img/edit.png";

const Proyecto = ({ proyecto }) => {
  // Obtener el state del proyecto
  const proyectosContext = useContext(proyectoContext);

  // Extraer funciones y objetos del context
  const { proyectoActual, proyectoSeleccionado } = proyectosContext;

  // Obtener la funcion del context de tarea
  const tareasContext = useContext(TareaContext);

  // Extraer funciones y objetos de tarea context
  const { obtenerTareas } = tareasContext;

  // Funcion para agregar el proyecto actual
  const seleccionarProyecto = (id) => {
    proyectoActual(proyecto._id); // Fijar un proyecto actual
    obtenerTareas(id); // Filtrar las tareas cuando se de click
  };

  // Funcion para editar un proyecto
  const editarProyecto = () => {
    proyectoSeleccionado(proyecto); // Fijar un proyecto actual
  };

  return (
    <li className=''>
      <button
        type='button'
        className='btn btn-blank'
        onClick={() => seleccionarProyecto(proyecto._id)}
      >
        {proyecto.nombre}
      </button>
      <img src={imagen} alt='' className='izquierda' onClick={editarProyecto} />
    </li>
  );
};

export default Proyecto;
