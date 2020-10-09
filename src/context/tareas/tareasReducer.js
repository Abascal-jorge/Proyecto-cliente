//Se importa el type del proyecto
import {OBTENER_TAREAS,
     AGREGAR_TAREA,
     VALIDAR_TAREA,
     ELIMINANDO_TAREA,
     TAREA_ACTUAL,
     ACTUALIZANDO_TAREA} from "../../types";

export default (state, action)=>{
    switch (action.type) {
        case OBTENER_TAREAS:
            return{
                ...state,
                tareasproyecto: action.payload
            }
        case AGREGAR_TAREA:
            return{
                ...state,
                tareasproyecto : [...state.tareasproyecto, action.payload],
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
                tareasproyecto: state.tareasproyecto.filter(tarea => tarea._id !== action.payload)
            }
        case TAREA_ACTUAL:
            return{
                ...state,
                tareaseleccionada: action.payload
            }
        case ACTUALIZANDO_TAREA:
            return {
                ...state,
                tareasproyecto : state.tareasproyecto.map(tarea => tarea._id === action.payload._id ? 
                    action.payload: tarea),
                tareaseleccionada: null
            }
        default:
            return state;
    }
}