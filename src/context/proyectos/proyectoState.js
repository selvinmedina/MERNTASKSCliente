import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import clienteAxios from '../../config/axios';

import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
  PROYECTO_ERROR
} from '../../types';

const ProyectoState = props => {
  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null,
    mensaje: null
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // Serie de funciones para el CRUD

  // Mostrar el formulario
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO
    })
  }

  // Obtener los proyectos
  const obtenerProyectos = async () => {
    try {
      const resultado = await clienteAxios.get('/api/proyectos');
      dispatch(
        {
          type: OBTENER_PROYECTOS,
          payload: resultado.data.proyectos
        }
      );
    } catch (error) {
      const alerta = {
        msg: '',
        categoria: ''
      }
      alerta.msg = 'Hubo un error';
      alerta.categoria = 'alerta-error';
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta
      });
    }
  }

  // Agregar nuevo proyecto
  const agregarProyecto = async proyecto => {
    try {

      // Crear un proyecto
      const resultado = await clienteAxios.post('/api/proyectos', proyecto);
      // Insertar el proyecto en el state
      dispatch({
        type: AGREGAR_PROYECTO,
        payload: resultado.data
      });
    } catch (error) {
      const alerta = {
        msg: '',
        categoria: ''
      }
      alerta.msg = 'Hubo un error';
      alerta.categoria = 'alerta-error';
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta
      });
    }
  }

  // Validar el formulario por errores
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO
    });
  }

  // Selecciona el proyecto que el usuario dio click
  const proyectoActual = proyectoId => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId
    });
  }

  // Elimina un proyecto
  const eliminarProyecto = async proyectoId => {
    const alerta = {
      msg: '',
      categoria: ''
    }
    try {
      const resultado = await clienteAxios.delete(`/api/proyectos/${proyectoId}`);

      alerta.msg = 'Eliminado correctamente';
      alerta.categoria = 'alerta-ok';
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta
      });
      dispatch({
        type: ELIMINAR_PROYECTO,
        payload: proyectoId
      });
    } catch (error) {
      alerta.msg = 'Hubo un error';
      alerta.categoria = 'alerta-error';
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta
      });
    }
  }

  return <proyectoContext.Provider value={{
    proyectos: state.proyectos,
    formulario: state.formulario,
    errorformulario: state.errorformulario,
    proyecto: state.proyecto,
    mensaje: state.mensaje,
    agregarProyecto,
    mostrarFormulario,
    mostrarError,
    obtenerProyectos,
    proyectoActual,
    eliminarProyecto
  }}>{props.children}</proyectoContext.Provider>;
};

export default ProyectoState;