//Se importa el type del proyecto
import {OBTENER_TAREAS,
     AGREGAR_TAREA,
     VALIDAR_TAREA,
     ELIMINANDO_TAREA} from "../../types";

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
        default:
            return state;
    }
}