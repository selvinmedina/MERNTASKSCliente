import React, { Fragment } from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir colores", estado: true },
    { nombre: "Elegir Plataforma de pago", estado: false },
    { nombre: "Elegir hosting", estado: true }
  ];

  return (
    <Fragment>
      <h2>Proyecto: Tienda Virtual</h2>

      <ul className='listado-tareas'>
        {tareasProyecto.length === 0 ? (
          <li className='tarea'>
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map(tarea => (
            <Tarea key={tarea.nombre} tarea={tarea} />
          ))
        )}
      </ul>
      <button type='button' className='btn btn-eliminar'>
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
