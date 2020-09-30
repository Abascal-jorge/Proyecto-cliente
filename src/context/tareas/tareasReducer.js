//Se importa el type del proyecto
import {OBTENER_TAREAS,
     AGREGAR_TAREA,
     VALIDAR_TAREA,
     ELIMINANDO_TAREA,
     MODIFICAR_ESTADO,
     TAREA_ACTUAL,
     ACTUALIZANDO_TAREA} from "../../types";

export default (state, action)=>{
    switch (action.type) {
        case OBTENER_TAREAS:
            return{
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoid === action.payload)
            }
        case AGREGAR_TAREA:
            return{
                ...state,
                tareas : [...state.tareas, action.payload],
                validartarea: false
            }
        case VALIDAR_TAREA:
            return{
                ...state,
                validartarea : true
            }
        case ELIMINANDO_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }
        case MODIFICAR_ESTADO:
            return{
                ...state,
                tareas: state.tareasproyecto.map(tarea => tarea.id === action.payload.id ? action.payload : tarea)
            }
        case TAREA_ACTUAL:
            return{
                ...state,
                tareaseleccionada: action.payload
            }
        case ACTUALIZANDO_TAREA:
            return {
                ...state,
                tareas : state.tareas.map(tarea => tarea.id === action.payload.id ? 
                    action.payload: tarea),
                tareaseleccionada: null
            }
        default:
            return state;
    }
}