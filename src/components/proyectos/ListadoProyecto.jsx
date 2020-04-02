import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ListadoProyecto = () => {
  // Extraer proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  // Obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
  }, []);

  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza creando uno.</p>;
  return (
    <ul className='listado-proyectos'>
      <TransitionGroup>
        {proyectos.map(proyecto => (
          <CSSTransition
            key={"css-" + proyecto.id}
            timeout={200}
            classNames='proyecto'
          >
            <Proyecto key={proyecto.id} proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyecto;
