import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasProyecto: action.payload
            }
        case AGREGAR_TAREA:
            return {
                ...state,
                errorTarea: false,
                tareasProyecto: [action.payload, ...state.tareasProyecto],
            }

        case VALIDAR_TAREA:
            return {
                ...state,
                errorTarea: true
            }
        case ELIMINAR_TAREA: {
            return {
                ...state,
                tareasProyecto: state.tareasProyecto.filter(tarea => tarea._id !== action.payload)
            }
        }
        case ACTUALIZAR_TAREA:
        case TAREA_ACTUAL: {
            return {
                ...state,
                tareaSeleccionada: action.payload
            }
        }
        case LIMPIAR_TAREA: {
            return {
                ...state,
                tareaSeleccionada: null
            }
        }
        default:
            return state;
    }
}






