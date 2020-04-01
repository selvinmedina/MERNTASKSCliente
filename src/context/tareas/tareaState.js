import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer'
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA
} from '../../types';


const TareaState = props => {

    // State inicial
    const initialState = {
        tareas: [
            { id: 1, nombre: "Elegir auriculares", estado: true, proyectoId: 1 },
            { id: 2, nombre: "Elegir hosting eliminado", estado: false, proyectoId: 4 },
            { id: 3, nombre: "Elegir colores", estado: true, proyectoId: 2 },
            { id: 4, nombre: "Elegir computadora", estado: true, proyectoId: 1 },
            { id: 5, nombre: "Elegir tipografia", estado: true, proyectoId: 2 },
            { id: 6, nombre: "Elegir hosting", estado: true, proyectoId: 4 },
            { id: 7, nombre: "Elegir Plataforma de pago", estado: false, proyectoId: 3 },
            { id: 8, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
            { id: 9, nombre: "Elegir comida", estado: true, proyectoId: 2 },
            { id: 10, nombre: "Elegir ancho de banda", estado: true, proyectoId: 4 },
            { id: 11, nombre: "Elegir celular", estado: true, proyectoId: 4 }
        ],
        tareasProyecto: null,
        errorTarea: false
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // Crear las funciones

    // Obtener las tareas de un proyecto
    const obtenerTareas = async proyectoId => {
        await dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        });
        document.getElementById("nombreTarea").focus();
    }

    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // Valida y muestra un erro en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // Eliminar tarea por id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    );
}

export default TareaState;


