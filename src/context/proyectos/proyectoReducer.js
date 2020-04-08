import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
  PROYECTO_ERROR,
  EDITAR_PROYECTO,
  PROYECTO_SELECCIONADO
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true
      }
    case EDITAR_PROYECTO:
      return {
        ...state,
        proyectos: state.proyectos.map(proyecto => proyecto._id === action.payload._id ? action.payload : proyecto),
        formulario: false,
        proyecto: state.proyecto ? [action.payload] : null,
        proyectoEditar: null
      }
    case PROYECTO_SELECCIONADO:
      return {
        ...state,
        proyectoEditar: action.payload,
        formulario: true
      }
    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload
      }
    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formulario: false,
        errorformulario: false
      }
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorformulario: true
      }
    case PROYECTO_ACTUAL:
      return {
        ...state,
        proyecto: state.proyectos.filter(proyecto => proyecto._id === action.payload)
      }
    case ELIMINAR_PROYECTO:
      return {
        ...state,
        proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload),
        proyecto: null
      }
    case PROYECTO_ERROR:
      return {
        ...state,
        mensaje: action.payload
      }
    default:
      return state;
  }
};
