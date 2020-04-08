import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ListadoTareas = () => {
  // Extraer proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  // Obtener la funcion del context de tarea
  const tareasContext = useContext(TareaContext);

  // Extraer funciones y objetos de tarea context
  const { tareasProyecto } = tareasContext;
  // Si no hay proyecto seleccionado
  if (!proyecto) return <h2>Selecciona un proyecto</h2>;

  // Array destructuring para extraer el proyecto actual
  console.log(proyecto);
  const [proyectoActual] = proyecto;

  // Eliminar proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual._id);
  };

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>

      <ul className='listado-tareas'>
        {tareasProyecto.length === 0 ? (
          <li className='tarea'>
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasProyecto.map((
              tarea //Index.css linea 263, ahi estan las animaciones
            ) => (
              <CSSTransition
                key={"css-" + tarea.id}
                timeout={200}
                classNames='tarea'
              >
                <Tarea key={tarea.id} tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button
        type='button'
        className='btn btn-eliminar'
        onClick={onClickEliminar}
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
